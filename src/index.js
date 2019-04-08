import Vue from 'vue'
import App from './app.vue'

import './assets/style/test.css'
import './assets/images/favicon.png'
import './assets/style/test.stylus.styl'
import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)