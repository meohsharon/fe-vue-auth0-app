<template>
  <div class="flex justify-center mt-12">
    <img
      class="inline-block border w-1/2 md:w-1/4"
      :src="avatarSrc"
      alt="avatar"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
const avatarSrc = new URL(
  `/src/assets/avatars/${user?.value.avatar}.png`,
  import.meta.url,
).href;
</script>
