<template>
  <section class="flex justify-center p-0 md:p-24">
    <p
      id="heliaStatus"
      :style="{ color: `${readyMessage ? heliaStatusColor : 'transparent'}` }"
    >
      Helia is {{ readyMessage }} to access IPFS
    </p>
  </section>

  <section
    class="flex justify-center h-fit mt-10 md:m-16 p-0 md:p-8 bg-red-100"
  >
    <TextCommiter />
  </section>

  <section
    class="flex justify-center h-fit mt-10 md:m-16 p-0 md:p-8 bg-red-100"
  >
    <!-- <UnixFSManager /> -->
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import TextCommiter from "@components/ipfs/TextCommiter.vue";
import UnixFSManager from "@components/ipfs/UnixFSManager.vue";

const { loading, error } = inject("HeliaProvider") as any;
let heliaStatusColor = undefined;
const readyMessage = computed(() => {
  if (loading.value == true) {
    heliaStatusColor = "yellow";
    return "Loading...";
  }
  if (loading.value == false && error.value.length == 0) {
    heliaStatusColor = "green";
    return "Ready";
  }
  return "Failing";
});
</script>
