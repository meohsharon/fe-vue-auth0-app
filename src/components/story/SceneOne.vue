<template>
  <img :src="src" alt="Scene One" />
  <div class="hotspot" @click="show = true">
    <span
      class="w-12 h-12 md:w-20 md:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20"
    ></span>
  </div>

  <MapModal v-model="show" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MapModal from "@components/maps/openlayers/MapModal.vue";
const show = ref(false);

defineProps<{
  src: string;
}>();
</script>

<style scoped>
.hotspot {
  z-index: 2;
  position: absolute;
  /* top: 50vh; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */

  span {
    position: relative;
    display: flex;
    background: #cf00f1;
    border-radius: 50%;
    animation: pulse 3s ease infinite;
    transition: background 0.3s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    &:after {
      content: attr(data-action);
      position: absolute;
      bottom: 130%;
      left: 50%;
      color: white;
      text-shadow: 0 1px black;
      font-weight: 400;
      font-size: 20px;
      opacity: 0;
      transform: translate(-50%, 10%) scale(0.5);
      transition: all 0.25s;
    }
  }

  svg {
    opacity: 0;
    color: #cf00f1;
    font-size: 1.4em;
    transition: opacity 0.2s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
    box-sizing: border-box;
  }

  &:before {
    z-index: -1;
    border: 0.15em solid #ffffff88;
    opacity: 0;
    transform: scale(2);
    transition:
      transform 0.25s,
      opacity 0.2s;
  }

  &:after {
    z-index: -2;
    background: #fff;
    animation: wave 3s linear infinite;
  }

  &:hover {
    span {
      animation: none;
      background: #fff;

      &:after {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
      }
    }

    svg {
      opacity: 1;
    }

    &:before {
      opacity: 1;
      transform: scale(1.5);
      animation: borderColor 2s linear infinite;
    }
    &:after {
      animation: none;
      opacity: 0;
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes borderColor {
  0% {
    border-color: #fff;
  }
  50% {
    border-color: #cf00f1;
  }
  100% {
    border-color: #fff;
  }
}

@keyframes wave {
  0% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

/* Source for iPhone SE https://blisk.io/devices/details/iphone-se-2020 */

/* Samsung Galaxy S8+ NOT WORKING */
@media (max-width: 360px) and (max-height: 750px) {
  .hotspot {
    top: 50vh;
    left: 20%;
    transform: translateY(-3rem);
  }
}

/* iPhone SE */
@media (max-width: 375px) {
  .hotspot {
    top: 47vh;
    left: 20%;
  }
}

@media (min-width: 376px) and (max-width: 450px) {
  .hotspot {
    top: 39vh;
    left: 20%;
  }
}

/* Mobile devices */
@media (min-width: 451px) and (max-width: 767px) and (min-height: 750px) {
  .hotspot {
    top: 40vh;
    left: 20%;
  }
}

/* iPads and Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .hotspot {
    top: 65vh;
    left: 20%;
  }
}

/* iPads in landscape */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hotspot {
    top: 45vh;
    left: 50%;
  }
}

/* Larger screens */
@media (min-width: 1025px) {
  .hotspot {
    top: 45%;
    left: 20%;
  }
}
</style>
