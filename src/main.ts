import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";

import "./main.css";
import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";
import { HeliaProviderPlugin } from "@helpers/plugins/heliaProvider.plugin";
// import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(auth0).use(pinia).use(HeliaProviderPlugin);

app.mount("#app");
