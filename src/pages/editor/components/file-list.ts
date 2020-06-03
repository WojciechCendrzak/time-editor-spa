import Vue from 'vue';
import { Button, List, Layout } from 'ant-design-vue';

Vue.use(Button);
Vue.use(List);
Vue.use(Layout);

export default {
  props: ['fileNames'],
  methods: {
    itemClick() {
      console.log('qwerqw');
    },
  },
};
