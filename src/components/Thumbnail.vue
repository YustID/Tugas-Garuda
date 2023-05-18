<!-- <script>
import axios from "axios";

export default {
  data() {
    return {
      sources: [], // Data yang akan diterima dari API
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("https://jakpost.vercel.app/api/category/indonesia/politics/page/2")
        .then((response) => {
          // Data yang diterima dari API
          this.sources = response.data.posts;
        })
        .catch((error) => {
          // Tangani error
          console.error(error);
        });
    },
  },
};
</script> -->

<script>
// import { mapGetters, mapActions } from "vuex";

// export default {
//   computed: {
//     ...mapGetters(["getSources"]), // Mapping getter getSources
//   },
//   methods: {
//     ...mapActions(["fetchSources"]), // Mapping action fetchSources
//     fetchData() {
//       this.fetchSources(); // Panggil action fetchSources untuk mengambil data dari API
//     },
//   },
// };
</script>

<template>
  <div id="news">
    <div class="News-wrapper" v-for="item in sources">
      <div class="News-title">{{ item.title }}</div>
      <img class="News-image" :src="item.image" />
      <div class="News-date">{{ item.pusblised_at }}</div>
      <div class="News-author">{{ item.headline }}</div>
      <button class="Button-view" @click="handleButtonClick">View Detail</button>
    </div>
  </div>
</template>
