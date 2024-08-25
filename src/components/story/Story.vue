<template>
  <!-- Carousel Source: https://ismail9k.github.io/vue3-carousel/getting-started.html -->
  <Carousel>
    <Slide v-for="slide in 3" :key="slide">
      <div v-if="slide === 1" id="sceneOne">
        <SceneOne :src="imgSrc(slide)" />
      </div>

      <div v-else id="otherScenes">
        <img :src="imgSrc(slide)" :alt="`scene${slide}`" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import SceneOne from "./SceneOne.vue";

const imgSrc = (index: number) => {
  return new URL(`/src/assets/game/scene${index}.png`, import.meta.url).href;
};

defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>
