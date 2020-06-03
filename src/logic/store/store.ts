//

import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { filesStore } from '@/pages/editor/logic/files.store.module';
import { getAppVersion } from '../version/version';

Vue.use(Vuex);

export interface RootState {
  appVersion: string;
}

const storeOptions: StoreOptions<RootState> = {
  state: {
    appVersion: getAppVersion(),
  },
  modules: {
    files: filesStore,
  },
};

export const store = new Vuex.Store<RootState>(storeOptions);
