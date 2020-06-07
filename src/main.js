import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#525739',
        secondary: '#242c28',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
