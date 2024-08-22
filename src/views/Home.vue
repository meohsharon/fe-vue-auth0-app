<template>
  <div
    v-if="!isLoading"
    class="flex h-full items-center justify-center align-middle text-xl sm:text-2xl"
  >
    <p class="max-w-[300px] sm:max-w-full text-center">
      Hello {{ user.name }}. You are Logged In!
    </p>
  </div>

  <Avatar />
  <!-- <Avatar @click="showModal = true" /> -->

  <MapModal :show="showModal">
    <div class="relative text-right p-3">
      <button
        type="button"
        class="font-normal bg-slate-200 rounded-full w-8 m-1 p-1 font-bruno"
        @click="showModal = false"
      >
        X
      </button>

      <OpenLayersMap />
    </div>
  </MapModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";
import MapModal from "@components/MapModal.vue";
import OpenLayersMap from "@components/maps/OpenLayersMap.vue";

const { user, isLoading } = useAuth0();
const showModal = ref(false);
</script>
