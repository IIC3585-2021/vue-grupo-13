import { createStore } from 'vuex';
import apiCredentials from './modules/getApiCredentials';
import assets from './modules/getApiAssets';
import asset from './modules/getApiAssetDetails';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { apiCredentials, assets, asset },
});
