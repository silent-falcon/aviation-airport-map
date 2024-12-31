<template>
  <div class="w-full h-full relative">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :options="mapOptions">
      <l-tile-layer
        :url="tileUrl"
        layer-type="base"
        name="OpenStreetMap"
        :options="tileOptions"
      />
    </l-map>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

// Reactive variables
const zoom = ref(5);
const center = ref([38.9182, -78.1944]); // Front Royal, VA coordinates
const tileUrl =
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';

//Disable attribution control
const mapOptions = {
  attributionControl: false,
};

// Options for the tile layer
const tileOptions = {
  noWrap: true,
  bounds: [
    [-85, -180],
    [85, 180],
  ],
};
</script>
