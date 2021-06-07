/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
import { axiosInstance, data, headers } from '../../apiService';

const state = {
  token: '',
};

const getters = {
  getToken: (state) => state.token,
};

const actions = {
  getApiToken: async ({ commit }) => {
    const response = await axiosInstance({
      method: 'post',
      headers,
      url: '/oauth/token',
      data,
      validateStatus: (status) => status >= 200 && status < 400,
    });
    commit('setApiToken', response.data.access_token);
  },
};

const mutations = {
  setApiToken: (state, token) => state.token = token,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
