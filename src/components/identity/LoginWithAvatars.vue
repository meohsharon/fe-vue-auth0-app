<template>
  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-60"
          :src="imgSrc(index)"
          :alt="`${index}.png`"
          @click="handleLogin(index)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-60"
          :src="imgSrc(index + 3)"
          :alt="`${index + 3}.png`"
          @click="handleLogin(index + 3)"
        />
      </div>
    </div>
  </div>

  <div class="snap-x flex justify-center gap-2">
    <div v-for="index in avatarIndices">
      <div class="p-1 m-1">
        <img
          class="inline-block w-60"
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
import { authorizationParams } from "@helpers/lovs";

const { loginWithRedirect } = useAuth0();
const handleLogin = (avatarIndex: number) => {
  const existing_avatar = localStorage.getItem("avatar");
  localStorage.setItem("avatar", avatarIndex.toString());
  const future_avatar = localStorage.getItem("avatar");
  console.log({
    avatarIndex,
    existing_avatar,
    future_avatar,
    toAuth0: authorizationParams.avatar,
  });

  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      ...authorizationParams,
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
