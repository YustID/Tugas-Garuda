import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    sources: [], // Data pengguna yang akan disimpan
  },
  mutations: {
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
  },
  actions: {
    // fetchSources({ commit }) {
    //   return axios
    //     .get("https://jakpost.vercel.app/api/category/indonesia/politics/page/2")
    //     .then((response) => {
    //       commit("SET_SOURCES", response.data.posts);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    async fetchSources({ commit }) {
      try {
        const response = await axios.get("https://jakpost.vercel.app/api/category/indonesia/politics/page/2");
        const data = response.data.posts;
        commit("SET_SOURCES", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getSources: (state) => state.sources,
  },
});
