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

    <ol-vector-layer v-if="treeLocation">
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="treeLocation"></ol-geom-point>
          <ol-style>
            <ol-style-box>
              <ol-style-icon :src="treeMarker" scale="0.25" />
            </ol-style-box>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-geolocation :projection="projection" @change:position="geoLocChange">
      <template>
        <ol-vector-layer :zIndex="3">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="currentLocation"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.3"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>

    <ol-context-menu-control :items="contextMenuItems" />

    <div class="control-bar-container">
      <ol-control-bar>
        <ol-control-button @click="goToCurrentLocation" class="border-r-2 pr-2">
          My Current Location
        </ol-control-button>
        <ol-control-button @click="goToTreeLocation" class="">
          My Tree Location
        </ol-control-button>
      </ol-control-bar>
    </div>
  </ol-map>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ObjectEvent } from "ol/Object";
import { View } from "ol";
import { Item } from "ol-contextmenu";

import hereIcon from "@assets/img/you-are-here.png";
import treeMarker from "@assets/img/tree-marker.png";

const map = ref(null);
const zoom = ref(8);
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const emit = defineEmits(["map-click"]);

const treeLocation = ref(null);
const view = ref<View | null>(null);
onMounted(() => {
  const markerPosition = localStorage.getItem("treeLocation");

  if (markerPosition) {
    treeLocation.value = JSON.parse(markerPosition);
    view.value?.setCenter(treeLocation.value);
    view.value?.setZoom(12);
  }
});
const goToTreeLocation = () => {
  if (treeLocation.value) {
    view.value?.setCenter(treeLocation.value);
    view.value?.setZoom(12);
  } else {
    alert('You havent planted a tree yet')
  }
};

const currentLocation = ref([]);
const geoLocChange = (event: ObjectEvent) => {
  currentLocation.value = event.target.getPosition();
  view.value?.setCenter(event.target?.getPosition());
  view.value?.setZoom(12);
};

const goToCurrentLocation = () => {
  if (currentLocation.value) {
    view.value?.setCenter(currentLocation.value);
    view.value?.setZoom(12);
  }
};

const contextMenuItems = ref<Item[]>([]);
contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "some-style-class", // add some CSS rules
    callback: (val) => {
      view.value?.setCenter(val.coordinate);
    }, // `center` is your callback function
  },
  {
    text: "Add a Marker",
    classname: "some-style-class", // you can add this icon with a CSS class
    // instead of `icon` property (see next line)
    icon: treeMarker, // this can be relative or absolute
    callback: (val) => {
      treeLocation.value = val.coordinate;
      localStorage.setItem("treeLocation", JSON.stringify(treeLocation.value));
      emit("map-click", treeLocation);
    },
  },
  "-", // this is a separator
];
</script>

<style scoped>
.control-bar-container {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #246b5c;
  background-color: rgb(43, 163, 63);
  border-radius: 15px;
  cursor: pointer;
}
</style>
