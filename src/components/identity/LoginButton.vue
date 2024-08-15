<template>
  <button
    class="bg-transparent hover:bg-white text-red-500 hover:text-black 
    text-sm md:text-2xl py-2 px-2 md:px-8 sm:mr-4 hover:border-transparent rounded"
    @click="handleLogin"
  >
    Log In
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      prompt: "login",
      avatar: 6, // default avatar
    },
  });
};
</script>
