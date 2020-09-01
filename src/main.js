import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import { Swipe, SwipeItem, Lazyload } from 'vant';
import 'vant/lib/index.css'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
