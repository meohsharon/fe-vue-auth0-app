<template>
  <div v-if="!isLoading" class="flex-grow">
    <IPFSManager />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import IPFSManager from "@components/ipfs/IPFSManager.vue";

const { isLoading } = useAuth0();
</script>
