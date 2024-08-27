<template>
  <div v-if="!isLoading && !show" class="flex-grow text-center">
    <p class="text-sm sm:text-base">Hello {{ user.name }}</p>
    <Avatar />

    <!-- <button
      id="commitTextButton"
      type="submit"
      @click="show = true"
      class="mt-3 sm:ml-3 sm:mt-8 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Access IPFS
    </button> -->
  </div>

  <!-- <IPFSManager v-if="show" /> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";
import IPFSManager from "@components/ipfs/IPFSManager.vue";

const show = ref(false);
const { user, isLoading } = useAuth0();
</script>
