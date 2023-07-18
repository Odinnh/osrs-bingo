import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebaseSettings'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCrow,
  faDisease,
  faDove,
  faEye,
  faFeatherPointed,
  faFrog,
  faHippo,
  faPaw,
  faPenToSquare,
  faRocket,
  faSpaghettiMonsterFlying,
  faSpoon,
  faPen,
  faShield,
  faEyeLowVision,
  faUserGroup,
  faGhost,
  faHeart,
  faHandFist,
  faHatWizard,
  faHatCowboy,
  faTree,
  faFire,
  faCat,
  faListUl,
  faRightToBracket,
  faRightFromBracket,
  faUsersRectangle,
  faSquareCheck,
  faTableCellsLarge,
  faShapes,
  faUsersLine,
  faUsersGear,
  faXmark,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//icons only functional
library.add(faUserGroup)
library.add(faPen)
library.add(faPenToSquare)
library.add(faEye)
library.add(faEyeLowVision)
library.add(faListUl)
library.add(faRightToBracket)
library.add(faRightFromBracket)
library.add(faUsersRectangle)
library.add(faSquareCheck)
library.add(faTableCellsLarge)
library.add(faShapes)
library.add(faUsersLine)
library.add(faUsersGear)
library.add(faXmark)
library.add(faCaretRight)

//icons for teams customisation
library.add(faShield)
library.add(faRocket)
library.add(faSpaghettiMonsterFlying)
library.add(faPaw)
library.add(faHippo)
library.add(faCrow)
library.add(faFrog)
library.add(faFeatherPointed)
library.add(faDisease)
library.add(faCat)
library.add(faDove)
library.add(faSpoon)
library.add(faGhost)
library.add(faHeart)
library.add(faHandFist)
library.add(faHatWizard)
library.add(faHatCowboy)
library.add(faTree)
library.add(faFire)

const app = createApp(App)
app.use(createPinia())
app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] })
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
