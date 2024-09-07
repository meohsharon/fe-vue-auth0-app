<template>
  <div class="h-[83vh]">
      <Story v-if="!isAuthenticated" class="flex h-full portrait:h-full portrait:md:h-screen portrait:md:-translate-y-[5.7vh]
      portrait:lg:-translate-y-28"/>
  </div>

  <!-- max-[360px]:portrait:-translate-y-11 
  max-[380px]:portrait:-translate-y-11
  max-[500px]:portrait:-translate-y-10
  max-[600px]:portrait:-translate-y-11 -->
  <!-- portrait:md:h-screen -->
    <!-- class="max-w-max " /> -->
    <!-- min-w-fit lg:min-w-0 lg:max-w-5xl lg:mx-auto -->

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
