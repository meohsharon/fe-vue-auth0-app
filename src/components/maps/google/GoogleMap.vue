<template>
  <!-- Source: https://vue3-google-map.com/getting-started/ -->
  <GoogleMap
    :api-key="GOOGLE_MAPS_API_KEY"
    class="h-[75vh] text-center font-bruno border-2"
    :center="center"
    :zoom="zoom"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import hereIcon from "@assets/img/you-are-here.png";
import treeMarker from "@assets/img/tree-marker.png";

import CONFIG from "@helpers/config";

const { GOOGLE_MAPS_API_KEY } = CONFIG;

const map = ref(null);
const zoom = ref(8);
const center = ref({ lat: 40.689247, lng: -74.044502 });
const projection = ref("EPSG:4326");
const emit = defineEmits(["map-click"]);

const treeLocation = ref(null);
const view = ref<null>(null);
onMounted(() => {
  const markerPosition = localStorage.getItem("treeLocation");

  if (markerPosition) {
    treeLocation.value = JSON.parse(markerPosition);
    // view.value?.setCenter(treeLocation.value);
    // view.value?.setZoom(12);
  }
});
const goToTreeLocation = () => {
  if (treeLocation.value) {
    // view.value?.setCenter(treeLocation.value);
    // view.value?.setZoom(12);
  } else {
    alert("You havent planted a tree yet");
  }
};

const currentLocation = ref([]);
const geoLocChange = (event) => {
  console.log("geoLocChange");
  currentLocation.value = event.target.getPosition();
  // view.value?.setCenter(event.target?.getPosition());
  // view.value?.setZoom(12);
};

const goToCurrentLocation = () => {
  if (currentLocation.value) {
    // view.value?.setCenter(currentLocation.value);
    // view.value?.setZoom(12);
  }
};

const contextMenuItems = ref<any[]>([]);
contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "context-style", // add some CSS rules
    callback: (val) => {
      // view.value?.setCenter(val.coordinate);
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
  font-size: 0.5rem;
  top: 98%;
  width: 20em;
  content: attr(data-tooltip);
  border: 1px dashed #16a34a;
  background: #eee;
  padding: 1em;
}
</style>
