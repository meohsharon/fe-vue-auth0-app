<template>
  <div v-if="!isLoading" class="flex h-full justify-center text-xl sm:text-2xl">
    <p class="max-w-[300px] sm:max-w-full text-center">
      Hello {{ user.name }}. You are Logged In!
    </p>
  </div>

  <Avatar />
  <!-- <Story />   -->
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";
import Story from "@components/story/Story.vue";

const { user, isLoading } = useAuth0();
</script>
