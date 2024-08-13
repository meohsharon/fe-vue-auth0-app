<template>
  <button
    class="bg-red-500 hover:bg-indigo-800 text-indigo-800 hover:text-red-500 text-4xl hover:border-transparent rounded-2xl w-60 h-24"
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
