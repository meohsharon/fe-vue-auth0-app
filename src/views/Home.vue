<template>
  <div
    v-if="!isLoading"
    class="flex h-full items-center justify-center align-middle mt-12 text-3xl"
  >
    Hello {{ user.name }}. You are Logged In!
  </div>

  <Avatar />
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";

const { user, isLoading } = useAuth0();
</script>
