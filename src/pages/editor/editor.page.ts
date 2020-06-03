import Vue from 'vue';
import { codemirror } from 'vue-codemirror';
import { insertTime } from './logic/commands/insert-time';
import { applyLineRules } from './logic/rules/line-rules';
import FileList from './components/file-list.vue';
import { Row, Col, Collapse } from 'ant-design-vue';
import { getFileNames, getFileContent, updateFileContent } from './logic/files.service';

import 'codemirror/lib/codemirror.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/idea.css';
import { getBoardName } from '../../logic/board/board.service';

export default Vue.extend({
  data() {
    return {
      code: '',
      fileNames: [] as (string | undefined)[],
      selectedFileName: 'default',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'idea',
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
    onCmReady(cm: CodeMirror) {
      console.log('the editor is readied!', cm);
    },
    onCmFocus(cm: CodeMirror) {
      console.log('the editor is focus!', cm);
    },
    onCmCodeChange(newCode: string) {
      console.log('this is new code', newCode);
      this.code = newCode;
    },
  },
  created: async function() {
    const fileNames = await getFileNames(getBoardName());
    this.fileNames = fileNames;
    const code = await getFileContent(getBoardName(), this.selectedFileName);
    this.codemirror.setValue(code || '');
  },
  watch: {
    code() {
      const { line, ch } = this.codemirror.getCursor();
      const content = this.codemirror.getValue();
      const res = applyLineRules(content);
      this.codemirror.setValue(res);
      this.codemirror.setCursor({ line, ch });
      updateFileContent(getBoardName(), this.selectedFileName, res);
    },
  },
  components: {
    codemirror,
    FileList,
  },
  computed: {
    codemirror(): CodeMirror {
      // @ts-ignore
      return (this.$refs.myCm as any).codemirror;
    },
  },
});
