<template>
  <div class="page-container">
    <div class="button-container">
      <a-button type="primary">Add file</a-button>
    </div>
    <a-row type="flex" :gutter="16">
      <a-col :span="6">
        <FileList v-bind:fileNames="fileNames" />
      </a-col>
      <a-col :span="18">
        <a-collapse default-active-key="1">
          <a-collapse-panel
            key="1"
            header="This is panel header with no arrow icon"
            :show-arrow="false"
          >
            <codemirror v-model="code" :options="cmOptions" ref="myCm"></codemirror>
          </a-collapse-panel>
        </a-collapse>
      </a-col>
    </a-row>
  </div>
</template>

<script src="./editor.page.ts"></script>
<style lang="less" src="./editor.page.less"></style>
