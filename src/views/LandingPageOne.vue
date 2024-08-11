<template>
  <div class="flex flex-col items-center">
    <img
      class="flex flex-row h-full"
      src="@assets/img/login-with-avatars.png"
      alt="MeOH Mission and Vision"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
</script>
