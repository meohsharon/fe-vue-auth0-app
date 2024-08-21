<template>
  <!-- <Avatar /> -->

  <header id="heliaStatus">
    <div class="wrapper">
      Helia is: {{ readyMessage }}
    </div>
  </header>

  <main>
    <TextCommiter />
    <UnixFSManager />
  </main>
  
</template>

<script setup lang="ts">
import Avatar from "@components/Avatar.vue";

import { ref, inject, computed  } from 'vue';
import TextCommiter from '@components/ipfs/TextCommiter.vue';
import UnixFSManager from '@components/ipfs/UnixFSManager.vue';

const {loading, error}  = inject('HeliaProvider') as any;

const statusColor = computed(() => {
  if (loading.value == true) return 'yellow'
  if (loading.value == false && error.value.length == 0) return 'green'
  return 'red'
})
const readyMessage = computed(() => {
  if (loading.value == true) return 'Loading...'
  if (loading.value == false && error.value.length == 0) return 'Ready'
  return 'Failing'
})
</script>
