<template>
  <!-- Source: https://vue3openlayers.netlify.app/ -->
  <ol-map
    ref="map"
    :controls="[]"
    class="h-[75vh] text-center font-bruno border-2"
  >
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

    <div
      class="fixed flex z-10 cursor-pointer bg-green-600 rounded-full control-bar-container p-2 text-[8px] md:text-xs w-[65%] md:w-1/2 lg:w-1/3 xl:w-1/4 max-[360px]:top-[16.9vh] max-[380px]:top-[17.4vh] max-[500px]:top-[16vh] max-[600px]:top-[17vh] md:top-48 lg:top-60 xl:top-40 2xl:top-52"
    >
      <ol-control-bar>
        <ol-control-button @click="goToCurrentLocation" class="border-r-2 pr-4">
          My Current Location
        </ol-control-button>
        <ol-control-button
          @click="goToTreeLocation"
          class="pl-4"
          data-tooltip="Right Click/Long-Press on the Map to Plant Your Tree"
        >
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
    alert("You havent planted a tree yet");
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
    classname: "context-style", // add some CSS rules
    callback: (val) => {
      view.value?.setCenter(val.coordinate);
    },
  },
  {
    text: "Plant A Tree",
    classname: "context-style",
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
.context-style {
  display: block;
  position: absolute;
  font-size: 32px;
  padding: 50px;
  background-color: #16a34a;
  width: 100vw;
}
.control-bar-container {
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
}

[data-tooltip]:hover::after {
  display: block;
  position: absolute;
  font-size: .5rem;
  top: 98%;
  width: 20em;
  content: attr(data-tooltip);
  border: 1px dashed #16a34a;
  background: #eee;
  padding: 1em;
}
</style>
