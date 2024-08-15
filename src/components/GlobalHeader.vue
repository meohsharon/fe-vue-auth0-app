<template>
  <div class="flex items-center justify-between rounded border-b-2">
    <!-- LEFT -->
    <div class="flex items-center">
      <img
        class="sm:ml-8 h-14 md:h-24"
        src="@assets/img/logo-small.ico"
        alt="MeOH"
      />
      <div class="flex max-w-[180px] sm:max-w-full">
        <span class="text-gray-600 text-xs md:text-base ml-4"
          >Bridge between electron and molecule
        </span>
      </div>
    </div>

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

import LoginButton from "@components/identity/LoginButton.vue";
import TopNavigation from "@components/TopNavigationWhite.vue";
import LogoutButtonWithProfile from "@components/identity/LogoutButtonWithProfile.vue";

const { isAuthenticated } = useAuth0();
const showTopNavigation = ref(true);
</script>
