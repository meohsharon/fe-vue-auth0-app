<template>
  <!-- Carousel Source: https://ismail9k.github.io/vue3-carousel/getting-started.html -->
  <Carousel @slide-end="handleSlideEnd">
    <Slide v-for="slide in totalSlides" :key="slide">
      <div v-if="slide === 1" id="sceneOne">
        <SceneOne :src="imgSrc(slide)" />
      </div>

      <div v-else-if="slide === totalSlides" id="sceneFour">
        <AvatarPicker />
      </div>

      <div v-else id="otherScenes">
        <img :src="imgSrc(slide)" :alt="`scene${slide}`" />
      </div>
    </Slide>

    <template #addons>
      <Navigation v-if="showNavigation" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import SceneOne from "./SceneOne.vue";
import AvatarPicker from "@components/identity/AvatarPicker.vue";

const router = useRouter();
const totalSlides = 4;
let showNavigation = ref(true);

const imgSrc = (index: number) => {
  return new URL(`/src/assets/game/scene${index}.png`, import.meta.url).href;
};

const handleSlideEnd = (data) => {
  if (data.currentSlideIndex === totalSlides - 1) {
    showNavigation.value = false;
    // setTimeout(() => router.replace({ path: "/pick-avatar" }), 5000);
  }
};

defineComponent({
  name: "Story",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>
