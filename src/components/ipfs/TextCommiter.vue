<template>
  <div class="w-full bg-white shadow sm:rounded-lg">
    <div id="rowAddData" class="m-4">
      <h3
        class="mt-4 mb-8 md:mb-12 text-sm md:text-xl font-semibold leading-6 text-gray-900 border-b-0 md:border-b-2"
      >
        1. Add Text Data to IPFS Node
      </h3>

      <div class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <label for="text" class="sr-only">Text</label>
          <input
            id="commitText"
            type="text"
            v-model="textToCommit"
            name="text"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Hello MeOH World"
          />
        </div>

        <button
          id="commitTextButton"
          type="submit"
          @click="handleCommitText"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Commit
        </button>
      </div>

      <div class="mt-5 sm:flex sm:items-center">
        <p id="commitTextCidOutput">
          CID:
          <span class="font-mono text-indigo-800 text-[.65rem] md:text-base">{{
            cid
          }}</span>
        </p>
      </div>
    </div>

    <div v-if="cid" id="rowFetchData" class="m-4 pt-8">
      <h3
        class="mt-4 mb-4 md:mb-8 text-sm md:text-xl font-semibold leading-6 text-gray-900 border-b-0 md:border-b-2"
      >
        2. Fetch Data From IPFS Node
      </h3>

      <button
        id="fetchCommitedTextButton"
        @click="fetchCommitedText"
        class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Fetch
      </button>
      <div class="mt-5 sm:flex sm:items-center">
        <p id="fetchedCommitedTextOutput">
          Result From IPFS:
          <span class="font-mono text-indigo-800 text-base md:text-2xl">{{
            commitedText
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCommitText } from "@helpers/heliaApi/useCommitText";

const { cid, commitText, commitedText, fetchCommitedText } = useCommitText();
const textToCommit = ref();

const handleCommitText = async () => {
  await commitText(textToCommit.value);
};
</script>

<style scoped></style>
