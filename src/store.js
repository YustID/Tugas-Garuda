import Vuex from "vuex";
import axios from "axios";

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sources: [], // Data pengguna yang akan disimpan
  },
  mutations: {
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
  },
  actions: {
    fetchSources({ commit }) {
      return axios
        .get("https://jakpost.vercel.app/api/category/indonesia/politics/page/2")
        .then((response) => {
          commit("SET_SOURCES", response.data.posts);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    getSources: (state) => state.sources,
  },
});
