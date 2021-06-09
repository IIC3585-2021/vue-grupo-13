/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import { axiosInstance, headers } from '../../apiService';

const state = {
  assetMarketInfo: {},
  assetBasicInfo: {},
};

const getters = {
  getAssetMarketInfo: (state) => state.assetMarketInfo,
  getAssetBasicInfo: (state) => state.assetBasicInfo,
};

const actions = {
  getApiAssetMarketInfo: async ({ commit, rootState }, id) => {
    const response = await axiosInstance({
      method: 'get',
      headers: {
        ...headers,
        authorization: `Bearer ${rootState.apiCredentials.token}`,
      },
      params: { assetId: id },
      url: '/market-cap',
      validateStatus: (status) => status >= 200 && status < 400,
    });
    commit('setApiMarketAssetInfo', response.data.content);
  },
  getApiAssetBasicInfo: async ({ commit }, id) => {
    const response = await axiosInstance({
      method: 'get',
      headers,
      url: `/asset/${id}`,
      validateStatus: (status) => status >= 200 && status < 400,
    });
    commit('setApiBasicAssetInfo', response.data);
  },
};

const mutations = {
  setApiMarketAssetInfo: (state, asset) => [state.assetMarketInfo] = asset,
  setApiBasicAssetInfo: (state, asset) => state.assetBasicInfo = asset,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
