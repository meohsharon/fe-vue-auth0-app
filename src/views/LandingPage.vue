<template>
  <!-- Do not remove this -->
  <img
    v-if="false"
    src="@assets/img/auth0-logo.png"
    alt="Hidden Image for Auth0 Login"
  />

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
      class="flex-grow items-center content-center justify-middle text-center"
    >
      <h2 class="mt-4 mb-2 font-medium text-xl sm:text-xl">
        Click An Image to Sign Up
      </h2>

      <h2 class="mb-8 font-medium text-base sm:text-base">
        (The image will become your Avatar)
      </h2>
      <LoginWithAvatars />
    </div>

    <div
      class="flex-grow items-center content-center justify-middle text-center border-r-2 py-6 sm:py-0"
    >
      <h2 class="mb-2 font-medium text-xl sm:text-xl content-center">Log In</h2>
      <h2 class="mb-8 font-medium text-base sm:text-base content-center">(Using existing or default Avatar)</h2>
      <LoginButtonBig />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButtonBig from "@components/identity/LoginButtonBig.vue";
import LoginWithAvatars from "@components/identity/LoginWithAvatars.vue";

const { isAuthenticated } = useAuth0();
</script>
