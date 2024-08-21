import { createApp } from "vue";
import { createPinia } from "pinia";

import "./main.css";
import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";
// import { HeliaProviderPlugin } from "@helpers/plugins/heliaProvider.plugin";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(auth0); //.use(HeliaProviderPlugin);

app.mount("#app");
