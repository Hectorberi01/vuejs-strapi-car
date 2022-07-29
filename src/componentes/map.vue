<template>
    <div class="map">
        <l-map style="height: 500px;" :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="markerLatLng" @click="openPopUp(markerLatLng, 'marker')"></l-marker>
            <l-feature-group ref="features">
            <l-popup > <span> Yay I was opened by {{caller}}</span></l-popup>
            </l-feature-group>
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LFeatureGroup, LPopup} from 'vue2-leaflet';

export default {
//name: 'MyAwesomeMap',
  components: {LMap,  LTileLayer, LMarker, LFeatureGroup, LPopup },

  data: function(){
    return{
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 14,
        center: [48.86632652013599, 2.327652898034393],
        markerLatLng: [51.504, -0.159],
        caller: null,
    }
  
  },
   methods: {
    openPopUp (latLng, caller) {
      this.caller = caller;
      this.$refs.features.mapObject.openPopup(latLng);
    }
  }
}
</script>

<style>
    .map{
      position: relative;
    }
</style>
