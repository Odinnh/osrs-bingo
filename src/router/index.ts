import { createRouter, createWebHashHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

// views
import home from '@/views/home.vapor.vue'
import loginView from '@/views/loginView.vapor.vue'
import viewBoard from '@/views/viewBoard.vapor.vue'
import viewBoardList from '@/views/viewBoardList.vapor.vue'
import colorPallete from '@/views/colorPallete.vapor.vue'
import allPublishedBoards from '@/views/allPublishedBoards.vapor.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/boards',
			name: 'Boards',
			component: allPublishedBoards
		},
		{
			path: '/login',
			name: 'loginScreen',
			component: loginView
		},
		{
			path: '/view/:boardUUID',
			name: 'viewBoard',
			component: viewBoard
		},
		{
			path: '/list/:boardUUID',
			name: 'viewBoardList',
			component: viewBoardList
		},
		{
			path: '/color/',
			name: 'color',
			component: colorPallete
		},
		{
			path: '/',
			name: 'Home',
			component: home
		}
	]
})
router.beforeEach(async (to) => {
	if (
		['editBoard', 'teamViewer', 'moderateBoard'].includes(to.name as string) &&
		!((await userIsAuthenticated(to.params.boardUUID as string)) || isUserAdmin())
	) {
		return { name: 'loginScreen' }
	}
	if (to.name == 'createNewBingo' && !(await isUserLoggedIn())) {
		return { name: 'loginScreen' }
	}
	if (to.name == 'viewBoard' && !(await boardIsPublished(to.params.boardUUID as string))) {
		return { name: 'loginScreen' }
	}
})
const isUserAdmin = async (): Promise<boolean> => {
	const user = await getCurrentUser()
	if (user) {
		const userDataSnapshot = await getDoc(doc(db, 'Users', user.uid))
		const userData = userDataSnapshot.data()

		if (userData && userData.type == 'Admin') {
			return true
		}
	}
	return false
}

const isUserLoggedIn = async (): Promise<boolean> => {
	const user = await getCurrentUser()

	if (user) {
		const userDataSnapshot = await getDoc(doc(db, 'Users', user.uid))
		const userData = userDataSnapshot.data()

		if (userData && userData.banned) {
			return false
		}
	}

	return !!user?.uid
}
const userIsAuthenticated = async (uid: string) => {
	const user = await getCurrentUser()
	if (user) {
		const userDataSnapshot = await getDoc(doc(db, 'Users', user.uid))
		const userData = userDataSnapshot.data()
		if (userData && userData.banned) {
			return false
		}
	}
	const boardDataSnapshot = await getDoc(doc(db, 'Boards', uid))
	const boardData = boardDataSnapshot.data()
	return (
		(boardData && boardData.ownerID === user?.uid) ||
		(boardData && boardData.moderators?.includes(user?.uid))
	)
}
const boardIsPublished = async (uid: string) => {
	const user = await getCurrentUser()
	if (user) {
		const userDataSnapshot = await getDoc(doc(db, 'Users', user.uid))
		const userData = userDataSnapshot.data()
		if (userData && userData.banned) {
			return false
		}
	}
	const boardDataSnapshot = await getDoc(doc(db, 'Boards', uid))
	const boardData = boardDataSnapshot.data()
	return (boardData && boardData.ownerID === user?.uid) || (boardData && boardData.published)
}
export default router
