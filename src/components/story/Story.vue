<template>
  <Carousel @slide-end="handleSlideEnd">
    <Slide v-for="(slide, index) in totalSlides" :key="index">
      <div v-if="index === 0" id="sceneOne">
        <SceneOne :src="imgSrc(index + 1)" />
      </div>

      <div v-else-if="index === totalSlides - 1" id="sceneFour">
        <AvatarPicker />
      </div>

      <div v-else id="otherScenes">
        <img :src="imgSrc(slide + 1)" :alt="`scene${index + 1}`" />
      </div>
    </Slide>

    <template #addons>
      <Navigation v-if="showNavigation" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import SceneOne from "./SceneOne.vue";
import AvatarPicker from "@components/identity/AvatarPicker.vue";

const router = useRouter();
const totalSlides = 4;
let showNavigation = ref(true);


const isMobile = () => {
  return window.innerWidth <= 768;
};

const imgSrc = (index: number) => {
  if (isMobile()) {
    const mobileSrc = new URL(`/src/assets/game/mobile-friendly-designs(${index}).png`, import.meta.url).href;
    console.log("Mobile image source:", mobileSrc);
    return mobileSrc;
  } else {
    const desktopSrc = new URL(`/src/assets/game/scene${index}.png`, import.meta.url).href;
    console.log("Desktop image source:", desktopSrc); 
    return desktopSrc;
  }
};

const handleSlideEnd = (data) => {
  if (data.currentSlideIndex === totalSlides - 1) {
    showNavigation.value = false;
  }
};

window.addEventListener('resize', () => {
  // Trigger Vue reactivity on window resize to check for mobile screen size
  isMobile();
});
</script>
