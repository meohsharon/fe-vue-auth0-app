<template>
  <div v-if="!isLoading && !show" class="flex-grow text-center">
    <p class="text-sm sm:text-base">Hello {{ user.name }}</p>
    <Avatar />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";

const show = ref(false);
const { user, isLoading } = useAuth0();
</script>
