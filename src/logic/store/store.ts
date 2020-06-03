//

import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { filesStore } from '@/pages/editor/logic/files.store.module';

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    files: filesStore,
  },
};

export const store = new Vuex.Store<RootState>(storeOptions);
