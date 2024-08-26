<template>
  <div
    v-if="!isAuthenticated"
    class="flex-grow items-center content-center justify-middle text-center"
  >
    <h2 class="mt-4 mb-2 font-medium text-base md:text-2xl">
      Pick an Avatar to Sign Up
    </h2>
    <LoginWithAvatars />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginWithAvatars from "@components/identity/LoginWithAvatars.vue";

const { isAuthenticated } = useAuth0();
</script>
