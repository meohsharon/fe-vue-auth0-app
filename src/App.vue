<template>
  <div v-if="isLoading" class="flex min-h-screen items-center justify-center">
    <LoadingSpinner />
  </div>

  <div class="flex flex-col min-h-screen">
    <header class="sticky z-40 top-0 h-16 md:h-20 font-bruno bg-white">
      <GlobalHeader />
    </header>

    <div class="flex-grow content-center font-bruno z-30">
      <main>
        <router-view v-if="!isLoading" />
      </main>
    </div>

    <footer class="sm:sticky z-40 bottom-0 p-4 bg-white">
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
