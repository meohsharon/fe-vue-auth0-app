import { createApp, defineAsyncComponent } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import auth0 from "./auth0";

import  VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

app
  .use(router)
  .use(auth0)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDJCukqhdfa8hzBMhlF-BxVwuOUB_E1WFg",
    },
  })
  .mount("#app");
