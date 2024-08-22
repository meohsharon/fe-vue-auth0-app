<template>
  <ol-map ref="map" style="height: 70vh" :controls="[]">
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-attribution-control />
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const zoom = ref(8);
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
</script>
