<template>
  <div class="page-container">
    <div class="button-container">
      <a-button type="primary">
        Add file
      </a-button>
    </div>
    <a-row type="flex" :gutter="16">
      <a-col :span="6">
        <FileList />
      </a-col>
      <a-col :span="18">
        <a-collapse default-active-key="1">
          <a-collapse-panel
            key="1"
            header="This is panel header with no arrow icon"
            :show-arrow="false"
          >
            <codemirror
              v-model="code"
              :options="cmOptions"
              ref="myCm"
            ></codemirror>
          </a-collapse-panel>
        </a-collapse>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from "vue";
import { codemirror } from "vue-codemirror";
import { insertTime } from "./commands/insert-time";
import { applyLineRules } from "./rules/line-rules";
import FileList from "./components/file-list";
import { Row, Col, Collapse } from "ant-design-vue";
import "codemirror/lib/codemirror.css";

Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);

import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/idea.css";

export default Vue.extend({
  data() {
    return {
      code: "const a = 10",
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "idea",
        lineNumbers: true,
        line: true,
        autofocus: true,
        extraKeys: {
          // "Shift-Ctrl-L": (cm) => {
          //   console.log("L");
          // },
          F5: insertTime,
        },
      },
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
  },
  watch: {
    code() {
      const { line, ch } = this.codemirror.getCursor();
      const content = this.codemirror.getValue();
      const res = applyLineRules(content);
      this.codemirror.setValue(res);
      this.codemirror.setCursor({ line, ch });
    },
  },
  components: {
    codemirror,
    FileList,
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    },
  },
});
</script>

<style lang="less">
.page-container {
  margin-left: 16px;
  margin-right: 16px;

  .ant-collapse-content-box {
    padding: 0;
  }

  .button-container {
    margin-bottom: 16px;
  }

  .CodeMirror {
    min-height: 300px;
    height: auto;

    .CodeMirror-scroll {
      min-height: 300px;
    }
  }
}
</style>
