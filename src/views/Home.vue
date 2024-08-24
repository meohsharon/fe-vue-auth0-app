<template>
  <div v-if="!isLoading && !show" class="flex-grow w-full text-center">
    <p class="text-sm sm:text-base">Hello {{ user.name }}</p>
    <p class="text-xl sm:text-2xl p-6">Click your avatar to start the story!</p>
    <Avatar @click="show = true" />
  </div>

  <Story v-if="show" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";
import Story from "@components/story/Story.vue";

const show = ref(false);
const { user, isLoading } = useAuth0();
</script>
