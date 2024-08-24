<template>
  <!-- Carousel Source: https://ismail9k.github.io/vue3-carousel/getting-started.html -->
  <Carousel>
    <Slide v-for="slide in 3" :key="slide">
      <div id="mapClick" v-if="slide === 1">
        <MapClick :src="imgSrc(slide)" />
      </div>

      <div id="justImg" v-else>
        <img
          class="justify-self-auto"
          :src="imgSrc(slide)"
          :alt="`scene${slide}`"
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <!-- <Pagination /> -->
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import MapClick from "@components/maps/MapClick.vue";

const imgSrc = (index: number) => {
  return new URL(`/src/assets/game/scene${index}.png`, import.meta.url).href;
};

defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>
