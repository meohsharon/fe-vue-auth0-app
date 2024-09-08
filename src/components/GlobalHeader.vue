<template>
  <div class="absolute inset-y-0 right-8 w-fit md:right-0 pt-2 items-center">
    <!-- CONDITIONAL NAVIGATION -->
    <div v-if="isAuthenticated" class="flex items-center sm:mr-8">
      <TopNavigation v-show="showTopNavigation" />
      <LogoutButtonWithProfile />
    </div>

    <!-- CONDITIONAL LOGIN -->
    <div v-else class="flex items-center">
      <LoginButton v-if="!isAuthenticated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

import TopNavigation from "@components/TopNavigation.vue";
import LoginButton from "@components/identity/LoginButton.vue";
import LogoutButtonWithProfile from "@components/identity/LogoutButtonWithProfile.vue";

const { isAuthenticated } = useAuth0();
const showTopNavigation = ref(true);
</script>
