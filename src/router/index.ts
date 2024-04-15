import { createRouter, createWebHashHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebaseSettings'

// views
import home from '@/views/home.vapor.vue'
import newBoard from '@/views/newBoard.vapor.vue'
import loginView from '@/views/loginView.vapor.vue'
import editBoard from '@/views/editBoard.vapor.vue'
import viewBoard from '@/views/viewBoard.vapor.vue'
import colorPallete from '@/views/colorPallete.vapor.vue'
import TeamViewer from '@/views/teamViewer.vapor.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/new',
			name: 'createNewBingo',
			component: newBoard
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
			path: '/edit/:boardUUID',
			name: 'editBoard',
			component: editBoard
		},
		{
			path: '/teams/:boardUUID',
			name: 'teamViewer',
			component: TeamViewer
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
		['editBoard', 'teamViewer'].includes(to.name as string) &&
		!(await userIsAuthenticated(to.params.boardUUID as string))
	) {
		return { name: 'loginScreen' }
	}
	if (to.name == 'createNewBingo' && !(await isUserLoggedIn())) {
		return { name: 'loginScreen' }
	}
})

const isUserLoggedIn = async () => {
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
	return boardData && boardData.ownerID === user?.uid
}
export default router