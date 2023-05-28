import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from 'vuefire'

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
  faEyeLowVision
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRocket)
library.add(faPen)
library.add(faShield)
library.add(faPenToSquare)
library.add(faEye)
library.add(faSpaghettiMonsterFlying)
library.add(faPaw)
library.add(faHippo)
library.add(faCrow)
library.add(faFrog)
library.add(faFeatherPointed)
library.add(faDisease)
library.add(faDove)
library.add(faSpoon)
library.add(faEyeLowVision)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire, { firebaseApp })
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
