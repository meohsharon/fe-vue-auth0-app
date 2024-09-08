<template>
  <div class="story">
    <Story v-if="!isAuthenticated" />
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

const fromStorage = localStorage.getItem("treeLocation");
console.log({ fromStorage });
</script>

<style scoped>
.story {
  z-index: 2;
  position: flex;
}

@media (max-width: 360px) and (max-height: 750px) {
  .story {
    position: fixed;
    top: 0;
    transform: translateY(5%);
  }
}

/* iPhone SE */
@media (max-width: 375px) {
  .story {
    position: fixed;
    top: 0;
  }
}

/* iPads and Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .story {
    position: fixed;
    top: 0;
    transform: translateY(-15%);
  }
}
</style>
