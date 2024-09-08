import "./main.css";
import "vue3-openlayers/styles.css";
import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";
import "@programic/vue3-tooltip/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import OpenLayersMap from "vue3-openlayers";
import Notifications from "@kyvg/vue3-notification";
import Tooltip from "@programic/vue3-tooltip";

import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";

const app = createApp(App);
const pinia = createPinia();

app
  .use(router)
  .use(auth0)
  .use(pinia)
  .use(Tooltip, {
    position: "bottom",
    type: "light",
  })
  .use(OpenLayersMap)
  .use(Notifications);

app.mount("#app");
