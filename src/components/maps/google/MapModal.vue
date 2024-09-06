<template>
  <BaseModal :open="model">
    <div class="relative text-right p-3">
      <button
        type="button"
        class="font-normal bg-gray-200 rounded-full w-8 m-1 p-1 font-bruno"
        @click="show(false)"
      >
        X
      </button>

      <GoogleMap />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@components/base/BaseModal.vue";
import GoogleMap from "@components/maps/google/GoogleMap.vue";

const model = defineModel<boolean, string>();
const show = (value: boolean) => {
  model.value = value;
};
</script>
