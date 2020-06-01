<template>
  <div>
    <h1>This is an edit page</h1>
    <div>
      <codemirror v-model="code" :options="cmOptions" ref="myCm"></codemirror>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import { insertTime } from "./commands/insert-time";
import { applyLineRules } from "./rules/line-rules";
import Vue from "vue";

import "codemirror/lib/codemirror.css";

// language js
import "codemirror/mode/javascript/javascript.js";

import "codemirror/theme/base16-dark.css";

export default Vue.extend({
  data() {
    return {
      code: "const a = 10",
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
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
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    },
  },
});
</script>
