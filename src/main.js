// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'
import plugin from '@/plugin'
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(VueProgressiveImage)
Vue.use(Vuetify)
Vue.use(VueTinyLazyloadImg);
Vue.config.productionTip = false
// add polyfill for IntersectionObserver
require('intersection-observer')
// use plugin
Vue.use(plugin);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(reg => {
      console.log('Service Worker has been registered');
    })
    .catch(e =>
      console.error('Error during service worker registration:', e)
    );
} else {
  console.warn('Service Worker is not supported');
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

