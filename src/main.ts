import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee, faPenAlt, faSmileBeam, faChartBar, faHeart, faChevronUp, faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

library.add(faCoffee, faPenAlt, faSmileBeam, faChartBar, faHeart, faChevronUp, faChevronDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
