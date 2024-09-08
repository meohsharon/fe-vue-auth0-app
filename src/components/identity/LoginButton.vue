<template>
  <button
    class="bg-transparent hover:bg-white text-red-500 hover:text-black text-sm md:text-2xl py-2 px-2 md:px-8 sm:mr-4 hover:border-transparent rounded"
    @click="callLogin"
  >
    Log In
  </button>
</template>

<script setup lang="ts">
import auth0 from "../../auth0";
import { handleLogin } from "@helpers/handleLogin";

const callLogin = () => {
  handleLogin(undefined, auth0);
};
</script>
