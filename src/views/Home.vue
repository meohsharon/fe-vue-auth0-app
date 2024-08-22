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
  <!-- <Avatar @click="show = true" />
  <MapModal v-model="show" /> -->
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Avatar from "@components/Avatar.vue";
const { user, isLoading } = useAuth0();

// import { ref } from "vue";
// import MapModal from "@components/maps/MapModal.vue";
// const show = ref(false);
</script>
