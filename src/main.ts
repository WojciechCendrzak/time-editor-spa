import Vue from 'vue';
import App from './app.vue';
import { router } from './logic/router/routes';
import { store } from './logic/store/store';
import 'ant-design-vue/dist/antd.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
