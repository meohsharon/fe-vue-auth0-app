<template>
  <notifications class="min-w-[50%]" />
  <!-- Do not remove this -->
  <img
    v-if="false"
    src="@assets/img/auth0-logo.png"
    alt="Hidden Image for Auth0 Login"
    class=""
  />

  <div v-if="isLoading" class="flex min-h-screen items-center justify-center">
    <LoadingSpinner />
  </div>

  <div v-else class="flex flex-col min-h-screen">
    <header class="sticky z-40 top-0 h-11 md:h-14 lg:h-20 font-bruno">
      <GlobalHeader />
    </header>

    <div class="flex-grow z-30 content-center font-bruno">
      <main>
        <router-view v-if="!isLoading" />
      </main>
    </div>

    <footer class="sticky z-40 bottom-0 p-2">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import Footer from "@components/Footer.vue";
import GlobalHeader from "@components/GlobalHeader.vue";
import LoadingSpinner from "@components/LoadingSpinner.vue";

const { isLoading } = useAuth0();
</script>
