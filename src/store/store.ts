import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default class StoreModel {
  selectedBoardName: string;
  selectedFileName: string;
  fileNames: string[];

  constructor() {
    this.selectedBoardName = "default";
    this.selectedFileName = "default";
    this.fileNames = [];
  }
}

export const store = new Vuex.Store({
  state: new StoreModel(),
  mutations: {
    setFileNames(state, fileNames: string[]) {
      state.fileNames = fileNames;
    },
  },
  actions: {
    setFileNames(context, fileNames: string[]) {
      context.commit("setFileNames", fileNames);
    },
  },
  modules: {},
});
