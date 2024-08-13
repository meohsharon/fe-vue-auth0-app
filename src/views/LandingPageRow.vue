<template>
  <div class="flex flex-col items-center px-6 lg:px-8 py-4 sm:py-4">
    <!-- Do not remove this -->
    <img
      v-if="false"
      src="@assets/img/auth0-logo.png"
      alt="Hidden Image for Auth0 Login"
    />

    <div v-if="!isAuthenticated" class="flex flex-col items-center">
      <h2 class="mt-64 mb-4 font-medium text-xl sm:text-xl">
        Click on an Avatar to Log In
      </h2>
      <LoginWithAvatars />

      <Divider />

      <h2 class="mt-16 mb-8 font-medium text-xl sm:text-xl">
        If you have logged in before, or want to use Default Avatar, then Login
        Here
      </h2>
      <LoginButtonBig />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Divider from "@components/Divider.vue";
import LoginButtonBig from "@components/identity/LoginButtonBig.vue";
import LoginWithAvatars from "@components/identity/LoginWithAvatars.vue";

const { isAuthenticated } = useAuth0();
</script>
