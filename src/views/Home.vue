<template>
  <div
    v-if="!isLoading"
    class="flex h-full items-center justify-center align-middle mt-12 text-3xl"
  >
    Hello {{ user.name }}. You are Logged In!
  </div>

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

const { user, isLoading } = useAuth0();
const avatarSrc = `/src/assets/avatars/${user?.value.avatar}.jpg`;
</script>
