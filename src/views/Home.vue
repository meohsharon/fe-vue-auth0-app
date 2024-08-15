<template>
  <div
    v-if="!isLoading"
    class="flex h-full items-center justify-center align-middle mt-12 text-2xl sm:text-3xl"
  >
    <p class="max-w-[300px] sm:max-w-full text-center">Hello {{ user.name }}. You are Logged In!</p>
  </div>

  <Avatar />
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";

const { user, isLoading } = useAuth0();
</script>
