declare interface CodeMirror {
  replaceSelection: (replacement: string, select?: string) => void;
  setValue: (content: string) => void;
  getCursor: (start?: string) => CodeMirrorCursorPosition;
  getValue: (separator?: string) => string;
  setCursor: (
    pos: CodeMirrorCursorPosition | number,
    ch?: number,
    options?: object
  ) => void;
}

declare interface CodeMirrorCursorPosition {
  line: number;
  ch: number;
}

declare module "vue-codemirror";
