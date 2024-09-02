<template>
  <header class="items-center bg-transparent text-gray-900 hidden sm:flex">
    <div v-for="nav in topNavigation">
      <button
        class="hover:bg-white hover:text-red-500 hover:border-transparent rounded p-4 m-4"
      >
        <a :href="nav.target">{{ nav.text }}</a>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { topNavigation } from "@helpers/lovs";
</script>
