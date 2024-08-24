import "./main.css";
import "vue3-openlayers/styles.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import OpenLayersMap from "vue3-openlayers";

import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";
import { HeliaProviderPlugin } from "@helpers/plugins/heliaProvider.plugin";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(auth0).use(pinia).use(OpenLayersMap /*, options */); // .use(HeliaProviderPlugin);

app.mount("#app");
