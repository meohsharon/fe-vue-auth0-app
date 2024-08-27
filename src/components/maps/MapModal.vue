<template>
  <BaseModal :show="model">
    <div class="relative text-right p-3">
      <button
        type="button"
        class="font-normal bg-slate-200 rounded-full w-8 m-1 p-1 font-bruno"
        @click="show(false)"
      >
        X
      </button>
      <button
        type="button"
        class="mt-4 px-4 py-2 bg-green-500 text-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        v-if="isPlantBtnOpen"
        @click="saveLocation"
      >
        I Planted A Tree
      </button>
      <OpenLayersMap @map-click="handleMapClick" />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@components/base/BaseModal.vue";
import OpenLayersMap from "@components/maps/OpenLayersMap.vue";
import { ref } from "vue";

const isPlantBtnOpen = ref(false);
const marker = ref(null);

const model = defineModel<boolean, string>();
function show(value: boolean) {
  model.value = value;
}

const handleMapClick = (event) => {
  isPlantBtnOpen.value = true;
  marker.value = event.value;
};

const saveLocation = () => {
  if (marker.value) {
    localStorage.setItem("treeLocation", JSON.stringify(marker.value));
    closeMapDialog();
  }
};

const closeMapDialog = () => {
  show(false);
};
</script>
