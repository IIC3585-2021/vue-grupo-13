/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
import { axiosInstance, headers } from '../../apiService';

const state = {
  assets: [],
};

const getters = {
  getAssets: (state) => state.assets,
};

const actions = {
  getApiAssets: async ({ commit }) => {
    const response = await axiosInstance({
      method: 'get',
      headers,
      params: { status: 'ACTIVE' },
      url: '/asset',
      validateStatus: (status) => status >= 200 && status < 400,
    });
    commit('setApiAssets', response.data.content.slice(0, 100));
  },
};

const mutations = {
  setApiAssets: (state, assets) => state.assets = assets,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
