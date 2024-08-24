<template>
  <Carousel>
    <Slide v-for="slide in 3" :key="slide">
      <div class="flex xl:justify-center">
        <div v-if="slide === 1">
          <MapClick :src="imgSrc(slide)" />
        </div>

        <div v-else>
          <img
            class="lg:w-[100vw] xl:h-[80vh] md:w-[100vw] lg:max-w-fit xl:max-w-screen"
            :src="imgSrc(slide)"
            :alt="`scene${slide}`"
          />
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <!-- <Pagination /> -->
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import MapClick from "@components/maps/MapClick.vue";

import "vue3-carousel/dist/carousel.css";

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
