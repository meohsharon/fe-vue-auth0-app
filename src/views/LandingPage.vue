<template>
  <div class="h-[83vh] flex justify-center xl:relative xl:h-full ">
      <Story v-if="!isAuthenticated" class="flex 
      h-full portrait:h-full portrait:md:h-screen 
      portrait:md:-translate-y-[5.7vh] portrait:lg:-translate-y-28 max-[600px]:portrait:-translate-y-10
      xl:w-3/4 2xl:w-2/3
      "/>
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
