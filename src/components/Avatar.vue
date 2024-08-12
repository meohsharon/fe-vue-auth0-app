<template>
  <div class="flex h-full justify-center text-3xl mt-[12%]">
    <img
      class="inline-block border border-slate-300 w-1/2"
      :src="avatarSrc"
      alt="avatar"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();
console.log(user.value);
const avatarSrc = new URL(
  `/src/assets/avatars/png/${user?.value.avatar}.png`,
  import.meta.url,
).href;
</script>
