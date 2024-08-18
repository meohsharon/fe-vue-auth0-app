<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky z-50 top-0 p-4 font-bruno bg-white">
      <GlobalHeader />
    </header>

    <div class="flex-grow content-center font-bruno z-30 px-3 sm:px-0">
      <main>
        <router-view v-if="!isLoading" />
      </main>
    </div>

    <footer class="sm:sticky z-50 bottom-0 bg-white">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

import Footer from "@components/Footer.vue";
import GlobalHeader from "@components/GlobalHeader.vue";

const { isLoading } = useAuth0();
</script>
