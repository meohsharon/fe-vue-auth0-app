<template>
  <div
    class="flex h-full items-center justify-center align-middle mt-12 text-3xl"
  >
    <img
      class="inline-block rounded-full w-1/3"
      :src="avatarSrc"
      alt="avatar"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
const avatarSrc = `@assets/img/avatars/${user?.value.avatar}.jpg`;
</script>
