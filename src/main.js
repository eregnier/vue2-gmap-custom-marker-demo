import * as VueGoogleMaps from "vue2-google-maps";

import App from "./App.vue";
// Using Cluster requires marker-clusterer-plus to be installed.
import GmapCluster from "vue2-google-maps/dist/components/cluster";
import Vue from "vue";

Vue.component("cluster", GmapCluster);
console.log('k', process.env.VUE_APP_GMAP_API_KEY)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAP_API_KEY,
    v: "3.26"
  },
  installComponents: false
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
