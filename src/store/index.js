import { createStore } from 'vuex';
import apiCredentials from './modules/getApiCredentials';
import assets from './modules/getApiAssets';
import asset from './modules/getApiAssetDetails';
import favouriteAssets from './modules/favouriteAssets';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    apiCredentials, assets, asset, favouriteAssets,
  },
});
