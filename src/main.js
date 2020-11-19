// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'

Vue.prototype.$bus = new Vue()
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
// createApp(App).mount('#app')
