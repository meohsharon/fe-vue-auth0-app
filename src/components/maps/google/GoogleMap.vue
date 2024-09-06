<template>
  <!-- Source: https://vue3-google-map.com/getting-started/ -->
  <GoogleMap
    class="h-[75vh] text-center font-bruno border-2"
    ref="mapRef"
    map-id="5a8ccdf3b0e247bc"
    :api-key="GOOGLE_MAPS_API_KEY"
    :center="center"
    :zoom="zoom"
    @contextmenu="showContextMenu($event)"
  >
    <!-- Marker for the Initial Map Center -->
    <AdvancedMarker :options="initialMarkerOptions" />

    <!-- Marker for the User's Current Location -->
    <CustomMarker :options="currentMarkertOptions">
      <div class="text-center">
        <img :src="hereIcon" class="w-20" />
      </div>
    </CustomMarker>

    <CustomControl position="TOP_CENTER">
      <div
        class="fixed flex z-10 cursor-pointer bg-green-600 rounded-full control-bar-container p-2 text-[8px] md:text-xs w-[65%] md:w-1/2 lg:w-1/3 xl:w-1/4 max-[360px]:top-[9.7vh] max-[380px]:top-[10.7vh] max-[500px]:top-[9.7vh] max-[600px]:top-[17vh] md:top-32 lg:top-44 xl:top-24 2xl:top-40"
      >
        <div @click="goToCurrentLocation" class="border-r-2 pr-4">
          My Current Location
        </div>
        <div
          @click="goToTreeLocation"
          class="pl-4"
          data-tooltip="Right-Click or Long-Press on Map to Plant Tree"
        >
          My Tree Location
        </div>
      </div>
    </CustomControl>

    <!-- Overlay to close the menu -->
    <div class="overlay" @click="closeContextMenu" v-if="showMenu" />
    <!-- Custom Context Menu -->
    <ContextMenu
      v-if="showMenu"
      :actions="contextMenuActions"
      @action-clicked="handleActionClick"
      :x="menuX"
      :y="menuY"
    />
  </GoogleMap>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, watch } from "vue";
import {
  GoogleMap,
  AdvancedMarker,
  CustomMarker,
  CustomControl,
} from "vue3-google-map";

import hereIcon from "@assets/img/you-are-here.png";
import treeMarker from "@assets/img/tree-marker.png";
import ContextMenu from "@components/maps/google/ContextMenu.vue";
import CONFIG from "@helpers/config";
const { GOOGLE_MAPS_API_KEY } = CONFIG;

const mapRef = ref(null);
const zoom = ref(8);
const center = reactive({ lat: 40.689247, lng: -74.044502 });
const initialMarkerOptions = { position: center };

const currentLocation = reactive({ lat: undefined, lng: undefined });
const currentMarkertOptions = { position: currentLocation };

// when this component runs attempt to get the User's location
// provide a callback to handle the provided position
navigator.geolocation.getCurrentPosition((pos) => {
  // update the User's location
  currentLocation.lat = pos.coords.latitude;
  currentLocation.lng = pos.coords.longitude;
});

// watch for changes to the User's Location
// https://www.reddit.com/r/vuejs/comments/tf9h60/trying_to_get_google_maps_current_location_vue3/
watch(
  [currentLocation, () => mapRef.value?.ready],
  ([loc, isReady]) => {
    if (isReady && loc.lat && loc.lng) {
      // if the map is ready and the userLocation has been set/changed,
      // let's use the component's internal method for moving the map
      mapRef.value?.map.panTo(loc);
    }
  },
  {},
);

const treeLocation = reactive({
  lat: 0,
  lng: 0,
});
onMounted(() => {
  const markerPosition = localStorage.getItem("treeLocation");
  console.log({ markerPosition });

  if (markerPosition) {
    // treeLocation = JSON.parse(markerPosition);
    // view.value?.setCenter(treeLocation.value);
    // view.value?.setZoom(12);
  }
});

const goToTreeLocation = () => {
  if (treeLocation) {
    mapRef.value?.map.setZoom(12);
    mapRef.value?.map.panTo(treeLocation);
  } else {
    alert("You havent planted a tree yet");
  }
};

const goToCurrentLocation = () => {
  console.log({ currentLocation });
  if (currentLocation) {
    mapRef.value?.map.setZoom(12);
    mapRef.value?.map.panTo(currentLocation);
  }
};

const showMenu = ref(false);
const menuX = ref(0);
const menuY = ref(0);

const contextMenuActions = ref([
  { label: "Edit", action: "edit" },
  { label: "Delete", action: "delete" },
]);

const showContextMenu = (event) => {
  showMenu.value = true;
  menuX.value = event.pixel.x;
  menuY.value = event.pixel.y;
  // event.stop();
  // mapRef.value?.map.stop()
};

const closeContextMenu = () => {
  showMenu.value = false;
};

function handleActionClick(action) {
  console.log(action);
  // console.log(targetRow.value);
}
</script>

<style scoped>
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
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 49;
}

.overlay::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}

.overlay:hover {
  cursor: pointer;
}
</style>
