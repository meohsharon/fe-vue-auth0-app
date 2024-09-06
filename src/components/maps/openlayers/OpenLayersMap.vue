<template>
  <!-- Source: https://vue3openlayers.netlify.app/ -->
  <ol-map
    ref="mapRef"
    :controls="[]"
    @click="handleMapClick"
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
      class="fixed flex z-10 cursor-pointer bg-green-600 rounded-full control-bar-container p-2 text-[8px] md:text-xs w-[65%] md:w-1/2 lg:w-1/3 xl:w-1/4 max-[360px]:top-[9.7vh] max-[380px]:top-[10.7vh] max-[500px]:top-[9.7vh] max-[600px]:top-[17vh] md:top-32 lg:top-44 xl:top-24 2xl:top-40"
    >
      <ol-control-bar>
        <ol-control-button @click="goToCurrentLocation" class="border-r-2 pr-4">
          My Current Location
        </ol-control-button>
        <ol-control-button
          @click="goToTreeLocation"
          class="pl-4"
          data-tooltip="Right-Click or Long-Press on Map to Plant Tree"
        >
          My Tree Location
        </ol-control-button>
      </ol-control-bar>
    </div>
  </ol-map>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { ObjectEvent } from "ol/Object";
import { View, Map } from "ol";
import { Item } from "ol-contextmenu";
import LongTouch from "ol-ext/interaction/LongTouch";

import hereIcon from "@assets/img/you-are-here.png";
import treeMarker from "@assets/img/tree-marker.png";

const mapRef = ref<{ map: Map }>(null);
const zoom = ref(8);
const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const emit = defineEmits(["map-click"]);

const treeLocation = ref(null);
const view = ref<View | null>(null);

let longPressTimer;
const LONG_PRESS_DURATION = 500; // milliseconds

const handleMapClick = (event: any) => {
  // Handle normal click events here
  console.log("Map clicked", event);
};

const handleLongPress = (event: any) => {
  const map = mapRef.value?.map;
  if (!map) return;

  const pixel = map.getEventPixel(event);
  const coordinate = map.getCoordinateFromPixel(pixel);

  // Show context menu or perform long press action
  showContextMenu(coordinate);
};

const showContextMenu = (coordinate: number[]) => {
  // Implement your context menu logic here
  console.log("Show context menu at", coordinate);

  // Example: Plant a tree at the long-pressed location
  treeLocation.value = coordinate;
  localStorage.setItem("treeLocation", JSON.stringify(treeLocation.value));
  emit("map-click", treeLocation);
};

// Custom long press handler
const handleTouchStart = (event: TouchEvent) => {
  if (event.touches.length > 1) return; // Ignore multi-touch
  longPressTimer = setTimeout(() => {
    const touch = event.touches[0];
    handleLongPress({ clientX: touch.clientX, clientY: touch.clientY });
  }, LONG_PRESS_DURATION);
};

const handleTouchEnd = () => {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
};

const handleMouseDown = (event: MouseEvent) => {
  if (event.button !== 2) return; // Only handle right-click
  longPressTimer = setTimeout(() => {
    handleLongPress(event);
  }, LONG_PRESS_DURATION);
};

const handleMouseUp = () => {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
};

onMounted(() => {
  // get map reference
  const map = mapRef.value?.map;
  if (!map) return;

  map
    .getViewport()
    .addEventListener("touchstart", handleTouchStart, { passive: false });
  map.getViewport().addEventListener("touchend", handleTouchEnd);
  map.getViewport().addEventListener("touchcancel", handleTouchEnd);
  map.getViewport().addEventListener("mousedown", handleMouseDown);
  map.getViewport().addEventListener("mouseup", handleMouseUp);

  // const longTouch = new LongTouch();
  // map.addInteraction(longTouch);

  // get location
  const markerPosition = localStorage.getItem("treeLocation");

  if (markerPosition) {
    treeLocation.value = JSON.parse(markerPosition);
    view.value?.setCenter(treeLocation.value);
    view.value?.setZoom(12);
  }
});

onUnmounted(() => {
  const map = mapRef.value?.map;
  if (!map) return;

  // Remove event listeners
  map.getViewport().removeEventListener("touchstart", handleTouchStart);
  map.getViewport().removeEventListener("touchend", handleTouchEnd);
  map.getViewport().removeEventListener("touchcancel", handleTouchEnd);
  map.getViewport().removeEventListener("mousedown", handleMouseDown);
  map.getViewport().removeEventListener("mouseup", handleMouseUp);
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
  console.log("geoLocChange");
  currentLocation.value = event.target.getPosition();
  // view.value?.setCenter(event.target?.getPosition());
  // view.value?.setZoom(12);
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
  font-size: 0.5rem;
  top: 98%;
  width: 20em;
  content: attr(data-tooltip);
  border: 1px dashed #16a34a;
  background: #eee;
  padding: 1em;
}
</style>
