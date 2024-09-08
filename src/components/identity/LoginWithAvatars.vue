<template>
  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-80 lg:w-60"
          :src="imgSrc(index)"
          :alt="`${index}.png`"
          @click="callLogin(index)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-80 lg:w-60"
          :src="imgSrc(index + 3)"
          :alt="`${index + 3}.png`"
          @click="callLogin(index + 3)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-80 lg:w-60"
          :src="imgSrc(index + 6)"
          :alt="`${index + 6}.png`"
          @click="callLogin(index + 6)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import auth0 from "../../auth0";
import { handleLogin } from "@helpers/handleLogin";

const callLogin = (avatarIndex: number) => {
  handleLogin(avatarIndex, auth0);
};

const avatarIndices = [1, 2, 3];
const imgSrc = (index: number) => {
  return new URL(`/src/assets/avatars/${index}.png`, import.meta.url).href;
};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
