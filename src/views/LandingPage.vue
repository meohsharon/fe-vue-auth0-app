<template>
  <!-- Do not remove this -->
  <img
    v-if="false"
    src="@assets/img/auth0-logo.png"
    alt="Hidden Image for Auth0 Login"
  />

  <Story v-if="!isAuthenticated" class="min-w-full" />
  <!-- xl:w-[65%] -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import Story from "@components/story/Story.vue";

const { isAuthenticated } = useAuth0();
if (isAuthenticated.value === true) {
  const router = useRouter();
  router.replace({ path: "/home" })
}
</script>
