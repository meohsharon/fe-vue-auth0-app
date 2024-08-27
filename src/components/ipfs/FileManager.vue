<template>
  <section class="flex justify-center p-0 md:p-24">
    <p
      id="heliaStatus"
      :style="{ color: `${readyMessage ? heliaStatusColor : 'transparent'}` }"
    >
      Helia is {{ readyMessage }} to access IPFS
    </p>
  </section>

  <section class="flex justify-center h-fit mt-10 md:m-16 p-0 md:p-8">
    <TextCommiter />
  </section>

  <section class="flex justify-center h-fit mt-10 md:m-16 p-0 md:p-8">
    <UnixFSManager />
  </section>
</template>

<script setup lang="ts">
import { ref, inject, computed } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

// https://github.com/ipfs-examples/helia-examples/tree/main/examples/helia-101
import TextCommiter from "@components/ipfs/TextCommiter.vue";
import UnixFSManager from "@components/ipfs/UnixFSManager.vue";

const show = ref(false);
const { user, isLoading } = useAuth0();

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

<!-- TO View on IPFS: https://ipfs.io/ipfs/<CID> -->
