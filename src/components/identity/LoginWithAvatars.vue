<template>
  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-4 m-1">
        <img
          class="inline-block w-32"
          :src="imgSrc(index)"
          :alt="`${index}.png`"
          @click="handleLogin(index)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-4 m-1">
        <img
          class="inline-block w-32"
          :src="imgSrc(index + 3)"
          :alt="`${index + 3}.png`"
          @click="handleLogin(index + 3)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-4 m-1">
        <img
          class="inline-block w-32"
          :src="imgSrc(index + 6)"
          :alt="`${index + 6}.png`"
          @click="handleLogin(index + 6)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();
const handleLogin = (avatarIndex: number) => {
  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      prompt: "login",
      avatar: avatarIndex,
    },
  });
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
