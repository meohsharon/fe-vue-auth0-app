<template>
  <div class="relative items-center">
    <img
      src="@assets/avatars/png/1.png"
      class="absolute z-10 w-96 bottom-40 left-400"
    />
    <img
      src="@assets/avatars/png/2.png"
      class="absolute z-10 w-96 bottom-30 left-30"
    />
    <img
      src="@assets/avatars/png/3.png"
      class="absolute z-10 w-96 bottom-20 left-20"
    />
    <img
      src="@assets/avatars/png/4.png"
      class="absolute z-10 w-96 bottom-10 left-10"
    />
    <img
      src="@assets/avatars/png/5.png"
      class="absolute z-10 w-96 bottom-8 left-10"
    />
    <img
      src="@assets/avatars/png/6.png"
      class="absolute z-1 inline-block w-3/4"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
</script>
