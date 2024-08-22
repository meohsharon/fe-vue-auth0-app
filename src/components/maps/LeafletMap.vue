<template>
  <!-- SOURCE: https://tailwindui.com/components/ecommerce/components/product-quickviews -->
  <div class="relative z-10" role="dialog" aria-modal="true">
    <div
      class="fixed inset-0 hidden bg-gray-500 bg-opacity-55 transition-opacity md:block"
      aria-hidden="true"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
      >
        <div
          class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
        >
          <div
            class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
          >
            <button
              type="button"
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <!-- 
            <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">                      
              <div id="map"></div>
            </div> -->

            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, watchEffect } from "vue";
import { useGeolocation } from "@vueuse/core";
import { userMarker, nearbyMarkers } from "@store/map.store";

const { coords } = useGeolocation();

let map: leaflet.Map;
let userGeoMarker: leaflet.Marker;

onMounted(() => {
  map = leaflet
    .map("map")
    .setView([userMarker.value.latitude, userMarker.value.longitude], 13);

  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  nearbyMarkers.value.forEach(({ latitude, longitude }) => {
    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2,
        )}</strong>)`,
      );
  });

  map.addEventListener("click", (e) => {
    const { lat: latitude, lng: longitude } = e.latlng;

    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2,
        )}</strong>)`,
      );

    nearbyMarkers.value.push({ latitude, longitude });
  });
});

watchEffect(() => {
  if (
    coords.value.latitude !== Number.POSITIVE_INFINITY &&
    coords.value.longitude !== Number.POSITIVE_INFINITY
  ) {
    userMarker.value.latitude = coords.value.latitude;
    userMarker.value.longitude = coords.value.longitude;

    if (userGeoMarker) {
      map.removeLayer(userGeoMarker);
    }

    userGeoMarker = leaflet
      .marker([userMarker.value.latitude, userMarker.value.longitude])
      .addTo(map)
      .bindPopup("User Marker");

    map.setView([userMarker.value.latitude, userMarker.value.longitude], 13);

    const el = userGeoMarker.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 70vh;
}
</style>
