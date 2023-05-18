<script setup>
import Thumbnail from "./components/Thumbnail.vue";
</script>

<template>
  <div class="App">
    <header class="App-header">
      <h1>Tugas Berita</h1>
      <input placeholder="Cari berita viralmu..." class="News-search" />
      <div class="News-container">
        <Thumbnail />
      </div>
    </header>
  </div>
</template>

<style scoped></style>
