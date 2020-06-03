import { Module } from 'vuex';
import { RootState } from '@/logic/store/store';
import { getFileNames, getFileContent, updateFileContent } from './files.service';
import { applyLineRules } from './rules/line-rules';

interface FilesState {
  fileNames: (string | undefined)[];
  selectedBoardId: string;
  selectedFileName: string;
  fileContent: string | undefined;
}

export const filesStore: Module<FilesState, RootState> = {
  state: (): FilesState => ({
    fileNames: [],
    selectedBoardId: 'default',
    selectedFileName: 'default',
    fileContent: '',
  }),
  mutations: {
    setFileNames(state, payload: (string | undefined)[]) {
      state.fileNames = payload;
    },
    setFileContent(state, payload: string | undefined) {
      state.fileContent = payload;
    },
  },
  actions: {
    async fetchFileNames({ commit, state }) {
      const fileNames = await getFileNames(state.selectedBoardId);
      commit('setFileNames', fileNames);
    },
    async fetchFileContent({ commit, state }) {
      const fileNames = await getFileContent(state.selectedBoardId, state.selectedFileName);
      commit('setFileContent', fileNames);
    },
    async calculateFileContent({ commit, state }, newFileContent: string) {
      const calculatedFileContent = applyLineRules(newFileContent);
      commit('setFileContent', calculatedFileContent);
      await updateFileContent(state.selectedBoardId, state.selectedFileName, calculatedFileContent);
    },
  },
};
