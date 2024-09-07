<template>
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
import { Carousel, Navigation, Slide } from "vue3-carousel";
import SceneOne from "./SceneOne.vue";
import AvatarPicker from "@components/identity/AvatarPicker.vue";

const totalSlides = 4;
let showNavigation = ref(true);

const isMobile = () => {
  return window.innerWidth <= 768;
};

const imgSrc = (index: number) => {
  if (isMobile()) {
    const mobileSrc = new URL(
      `/src/assets/game/mobile/scene${index}.png`,
      import.meta.url,
    ).href;
    console.log("Mobile image source:", mobileSrc);
    return mobileSrc;
  } else {
    const desktopSrc = new URL(
      `/src/assets/game/desktop/scene${index}.png`,
      import.meta.url,
    ).href;
    console.log("Desktop image source:", desktopSrc);
    return desktopSrc;
  }
};

const handleSlideEnd = (data) => {
  if (data.currentSlideIndex === totalSlides - 1) {
    showNavigation.value = false;
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

// window.addEventListener("resize", () => {
//   // Trigger Vue reactivity on window resize to check for mobile screen size
//   isMobile();
// });
</script>
