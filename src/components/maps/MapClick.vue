<template>
  <div ref="imageContainer">
    <img :src="src" alt="Hotspot Image" class="justify-self-auto" />
    <div
      class="hotspot top-32 left-20 sm:top-32 sm:left-20 md:top-64 md:left-36 lg:top-[45%] lg:left-52 xl:top-90 xl:left-[20%] 2xl:left-[30%]"
      @click="show = true"
    >
      <span class="w-12 h-12 md:w-20 md:h-20 xl:w-44 xl:h-44"></span>
    </div>
  </div>

  <MapModal v-model="show" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MapModal from "@components/maps/MapModal.vue";
const show = ref(false);

defineProps<{
  src: string;
}>();
</script>

<style scoped>
.hotspot {
  z-index: 2;
  position: absolute;
  display: block;

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
</style>
