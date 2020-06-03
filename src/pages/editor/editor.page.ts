import Vue from 'vue';
import { codemirror } from 'vue-codemirror';
import { insertTime } from './logic/commands/insert-time';
import FileList from './components/file-list.vue';
import { Row, Col, Collapse } from 'ant-design-vue';

import 'codemirror/lib/codemirror.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/idea.css';
import { store } from '@/logic/store/store';

export default Vue.extend({
  data() {
    return {
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'idea',
        lineNumbers: true,
        line: true,
        autofocus: true,
        extraKeys: {
          F5: insertTime,
        },
      },
    };
  },
  created: async function() {
    await store.dispatch('fetchFileNames');
    await store.dispatch('fetchFileContent');
  },
  watch: {
    fileContent() {
      const { line, ch } = this.codemirror.getCursor();
      const fileContent = this.$store.state.files.fileContent;
      this.codemirror.setValue(fileContent);
      this.codemirror.setCursor({ line, ch });
    },
  },
  components: {
    codemirror,
    FileList,
  },
  methods: {
    async onCmCodeChange(newFileContent) {
      await store.dispatch('calculateFileContent', newFileContent);
    },
  },
  computed: {
    fileNames(): (string | undefined)[] {
      return this.$store.state.files.fileNames;
    },
    codemirror(): CodeMirror {
      // @ts-ignore
      return (this.$refs.myCm as any).codemirror;
    },
    fileContent(): string {
      return this.$store.state.files.fileContent;
    },
  },
});
