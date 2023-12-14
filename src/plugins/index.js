/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import store from '../store/index.js'
import baseCard from '../components/ui/BaseCard.vue'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(store)
    .use(baseCard)
}
