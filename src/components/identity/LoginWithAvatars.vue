<template>
  <div class="snap-x flex item-center pb-12">
    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/img/avatars/1.jpg"
        alt="1"
        @click="handleLogin(1)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/img/avatars/2.jpg"
        alt="2"
        @click="handleLogin(2)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/img/avatars/3.jpg"
        alt="3"
        @click="handleLogin(3)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/img/avatars/4.jpg"
        alt="4"
        @click="handleLogin(4)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/img/avatars/5.jpg"
        alt="5"
        @click="handleLogin(5)"
      />
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
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
