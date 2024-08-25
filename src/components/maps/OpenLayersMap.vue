<template>
  <!-- Source: https://vue3openlayers.netlify.app/ -->
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

    <ol-geolocation :projection="projection" @change:position="geoLocChange">
      <template>
        <ol-vector-layer :zIndex="3">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="position"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.3"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { View } from "ol";
import { ObjectEvent } from "ol/Object";
import hereIcon from "@assets/img/you-are-here.png";

const zoom = ref(8);
const center = ref([40, 40]);
const projection = ref("EPSG:4326");

const view = ref<View>();
const map = ref(null);
const position = ref([]);
const geoLocChange = (event: ObjectEvent) => {
  position.value = event.target.getPosition();
  view.value?.setCenter(event.target?.getPosition());
  view.value?.setZoom(12);
};
</script>
