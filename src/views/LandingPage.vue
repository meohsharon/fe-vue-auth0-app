<template>
  <!-- <div class="h-[83vh] flex justify-center xl:relative xl:h-full"> -->
  <div class="portrait:fixed flex h-full top-0 bg-red-100 overflow-auto">
    <!-- class="flex h-full w-full xl:w-3/4 2xl:w-2/3" -->
    <Story
      v-if="!isAuthenticated"
      class="flex flex-grow h-full w-full xl:w-3/4 2xl:w-2/3"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import Story from "@components/story/Story.vue";

const { isAuthenticated } = useAuth0();
if (isAuthenticated.value === true) {
  const router = useRouter();
  router.replace({ path: "/home" });
}
</script>
