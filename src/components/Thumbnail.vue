<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const msg = ref("Welcome to my Vuex Store");
const getSources = computed(() => {
  return store.getters.getSources;
});
const sources = computed(() => {
  return store.state.sources;
});
onMounted(() => {
  store.dispatch("fetchSources");
});
</script>

<template>
  <div id="news">
    <div class="News-wrapper" v-for="item in sources" :key="item">
      <div class="News-title">{{ item.title }}</div>
      <img class="News-image" :src="item.image" />
      <div class="News-date">{{ item.pusblised_at }}</div>
      <div class="News-author">{{ item.headline }}</div>
      <button class="Button-view" @click="handleButtonClick">View Detail</button>
    </div>
  </div>
</template>
