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

<script src="./file-list.ts"></script>
<style lang="less" src="./file-list.less"></style>
