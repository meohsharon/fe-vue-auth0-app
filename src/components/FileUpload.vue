<template>
  <input ref="fileInput" type="file" @change="handleFileChange" />
  <!-- <button @click="doSomething"
    class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

    >Upload to IPFS</button> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const fileInput = ref<HTMLInputElement | null>(null);
const files = ref();

function handleFileChange() {
  files.value = fileInput.value?.files;
}

function doSomething() {
  const file = files.value[0];
  console.log(file);
  // and do other things...
}
</script>
