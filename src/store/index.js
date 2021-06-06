import { createStore } from 'vuex';
import apiCredentials from './modules/apiCredentials';
import assets from './modules/assets';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { apiCredentials, assets },
});
