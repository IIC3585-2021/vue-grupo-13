/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
const state = {
  favourites: [],
};

const getters = {
  getFavourites: (state) => state.favourites,
};

const actions = {
  pushToFavourites: ({ commit }, asset) => {
    commit('addToFavourites', asset);
  },
  popFromFavourites: ({ commit }, asset) => {
    commit('deleteFromFavourites', asset);
  },
};

const mutations = {
  addToFavourites: (state, asset) => state.favourites = [...state.favourites,
    asset],
  deleteFromFavourites: (state, asset) => state.favourites = state.favourites
    .filter((favouritesAsset) => favouritesAsset.id !== asset.id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
