<template>
  <div class="snap-x flex justify-center">
    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/1.png"
        alt="1"
        @click="handleLogin(1)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/2.png"
        alt="2"
        @click="handleLogin(2)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/3.png"
        alt="3"
        @click="handleLogin(3)"
      />
    </div>
  </div>

  <div class="snap-x flex justify-center">
    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/3.png"
        alt="3"
        @click="handleLogin(3)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/4.png"
        alt="4"
        @click="handleLogin(4)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/5.png"
        alt="5"
        @click="handleLogin(5)"
      />
    </div>
  </div>

  <div class="snap-x flex justify-center">
    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/2.png"
        alt="2"
        @click="handleLogin(2)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/1.png"
        alt="1"
        @click="handleLogin(1)"
      />
    </div>

    <div class="p-4 m-1">
      <img
        class="inline-block w-32"
        src="@assets/avatars/png/4.png"
        alt="4"
        @click="handleLogin(4)"
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
