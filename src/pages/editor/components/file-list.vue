<template>
  <div>
    <a-list size="small" bordered :data-source="fileNames">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title" href="#" v-on:click="itemClick">{{ item }}</a>
        </a-list-item-meta>
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

export default {
  props: ["fileNames"],
  methods: {
    itemClick() {
      console.log("qwerqw");
    },
  },
};
</script>

<style lang="less"></style>
