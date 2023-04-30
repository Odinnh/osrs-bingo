import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from 'vuefire'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebaseSettings'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCrow, faDisease, faDove, faFeatherPointed, faFrog, faHippo, faPaw, faRocket, faSpaghettiMonsterFlying, faSpoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faRocket)
library.add(faSpaghettiMonsterFlying)
library.add(faPaw)
library.add(faHippo)
library.add(faCrow)
library.add(faFrog)
library.add(faFeatherPointed)
library.add(faDisease)
library.add(faDove)
library.add(faSpoon)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire, { firebaseApp })
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
