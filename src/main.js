import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/Router'
import carousel from './componentes/carousel.vue'
import footer from './componentes/footer'
import header from './componentes/header.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import carousel1 from './componentes/carousel1.vue'
import map from './componentes/map.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css';
import excel from './componentes/excel.vue'
import ExportExcelSheetVueJs from "export-excel-sheet-vue-js";
/*import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
*/
Vue.use(ExportExcelSheetVueJs);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)


new Vue({
  el: '#app',
  vuetify,
  router,
  carousel,footer,header,carousel1,
  map,excel,
  render: h => h(App)
})
