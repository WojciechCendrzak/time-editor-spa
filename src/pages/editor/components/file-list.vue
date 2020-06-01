<template>
  <div>

    <a-list size="small" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item }}
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, List, Layout } from "ant-design-vue";
Vue.use(Button);
Vue.use(List);
Vue.use(Layout);

const data = ["2018", "2019", "2020."];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="less"></style>
