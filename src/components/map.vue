<template>
    <div style="height: 600px; width: 800px;">
      <l-map 
        ref="map" 
        v-model:zoom="zoom" 
        :center="center"
        style="height: 100%; width: 100%;"
      >
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
import { ref } from "vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

// Reactive variables
const zoom = ref(5); // Default zoom level
const center = ref([38.9182, -78.1944]); // Front Royal, VA coordinates
const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}";

// Options for the tile layer
const tileOptions = {
noWrap: true,
bounds: [[-85, -180], [85, 180]],
};
</script>
  
<style lang="scss" scoped>
</style>
  