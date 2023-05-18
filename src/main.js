import { createApp } from "vue";
import "../style.css";
import App from "./App.vue";
import store from "./store";
import Thumbnail from "../src/components/Thumbnail.vue";

// new Vue({
//   store, // Pasang store ke aplikasi Vue
//   render: (h) => h(Thumbnail),
// }).$mount("#news");

// createApp(App).mount("#app");

const app = createApp(App);
app.use(store);
app.mount("#app");
