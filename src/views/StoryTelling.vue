<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center relative -mt-[100px]"
  >
    <img
      v-if="!showGoogleMap"
      src="@assets/img/story-telling/map.png"
      alt="World Map"
      class="w-[70%]"
      @click="showGoogleMap = true"
    />

    <GoogleMap
      v-else
      :center="mapCenter"
      :zoom="zoomLevel"
      style="width: 100%; height: 500px"
      @click="placeMarker"
    >
      <GoogleMapMarker v-if="markerPosition" :position="markerPosition" />
    </GoogleMap>

    <div v-if="!showGoogleMap" class="absolute -bottom-[135px] left-1/2 -translate-x-1/2">
      <div class="relative">
        <img src="@/assets/img/story-telling/textImg.png" alt="Sharon" class="" />
        <p
          class="absolute top-[35px] left-[115px] text-[25px] pl-[30px] text-white font-medium"
        >
          Sharon
        </p>
        <p class="absolute top-[105px] left-0 text-[17px] max-w-[610px] pl-[30px]">
          Pick your location on the map and complete your address! Make sure to confirm
          all information is correct and once that’s done, let’s go plant your tree.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleMap, GoogleMapMarker } from "vue3-google-map";

export default {
  name: "MapComponent",
  components: {
    GoogleMap,
    GoogleMapMarker,
  },
  data() {
    return {
      showGoogleMap: false,
      mapCenter: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
      zoomLevel: 8,
      markerPosition: null,
    };
  },
  methods: {
    placeMarker(event) {
      this.markerPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    },
  },
};
</script>

<style scoped>
/* You can keep your existing styles here or add new ones as needed */
</style>
