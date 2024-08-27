<template>
  <div class="w-full bg-white shadow sm:rounded-lg">
    <h1>UnixFS Manager</h1>

    <div id="rowCreateDir">
      <div class="mt-5 sm:flex sm:items-center">
        <input
          id="newDirInput"
          type="text"
          v-model="dirPathName"
          class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          id="newDirButton"
          @click="handleNewDir"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create New Directory
        </button>
      </div>

      <div class="mt-5 sm:flex sm:items-center font-mono">
        <p id="newDirOutput">Directory CID: {{ dirCid }}</p>
      </div>
    </div>

    <div v-if="dirCid">
      <div class="mt-5 sm:flex sm:items-center">
        <button
          id="statDirButton"
          @click="handleGetStat"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Directory Stats
        </button>
      </div>
      <div class="mt-5 sm:flex sm:items-center">
        <p id="statDirOutput" class="font-mono mt-3 px-3">{{ stat }}</p>
      </div>
    </div>

    <div v-if="dirCid">
      <div class="mt-5 sm:flex sm:items-center">
        <button
          id="getDirButton"
          @click="handleGetDirectory(dirCid, '')"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Directory List
        </button>
      </div>
      <div class="mt-5 sm:flex sm:items-center">
        <p
          id="dirListOutput"
          v-for="(item, index) in lsOutput"
          class="font-mono mt-3 px-3"
        >
          {{ item }}
        </p>
      </div>
    </div>

    <div v-if="lsOutput">
      <div class="mt-5 sm:flex sm:items-center">
        <input
          id="fileNameInput"
          type="text"
          v-model="fileName"
          placeholder="File Name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div class="mt-5 sm:flex sm:items-center">
        <!-- <input
          id="fileContentInput"
          type="text"
          v-model="fileContent"
          placeholder="File Content"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        /> -->

        <input
          id="fileContentInput"
          ref="fileInput"
          type="file"
          @change="handleFileChange"
          placeholder="File Content"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div class="mt-5 sm:flex sm:items-center">
        <button
          id="newFileButton"
          @click="handleAddFile"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add File
        </button>
      </div>
      <div class="mt-5 sm:flex sm:items-center font-mono">
        <p id="fileCidOutput">file cid: {{ fileCid }}</p>
      </div>
      <div class="mt-5 sm:flex sm:items-center font-mono">
        <p id="updatedDirOutput">updated directory cid: {{ fileDirCid }}</p>
      </div>
    </div>

    <div v-if="fileDirCid">
      <div class="mt-5 sm:flex sm:items-center">
        <button
          id="dirContentsButton"
          @click="handleGetDirectoryContents"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Directory Contents
        </button>
      </div>
      <div class="mt-5 sm:flex sm:items-center">
        <p
          id="dirContentsOutput"
          v-for="(item, index) in directoryContents"
          class="font-mono"
        >
          directory contents: {{ item }}
        </p>
      </div>
    </div>

    <div v-if="directoryContents">
      <div class="mt-5 sm:flex sm:items-center">
        <button
          id="fileContentsButton"
          @click="handleGetFile"
          class="mt-3 sm:ml-3 sm:mt-0 px-3 py-2 inline-flex justify-center w-1/2 sm:w-auto rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get File
        </button>
      </div>
      <div class="mt-5 sm:flex sm:items-center">
        <p id="fileContentsOutput" class="font-mono">
          file contents: {{ fileData }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUnixFS } from "@helpers/heliaApi";

const { getStat, addDirectory, getDirectory, addFile, getFile } = useUnixFS();

const dirPathName = ref();
const dirCid = ref();
const handleNewDir = async () => {
  const response = await addDirectory(dirPathName.value);
  dirCid.value = response.data;
};
const stat = ref();
const handleGetStat = async () => {
  const response = await getStat(dirCid.value, dirPathName.value);
  stat.value = response.data;
};

const lsOutput = ref();
const ls = ref();
const handleGetDirectory = async (cid, pathName) => {
  const response = await getDirectory(cid, pathName);
  lsOutput.value = response.data.map((item) => {
    return {
      cid: item.cid,
      path: item.path,
      name: item.name,
    };
  });
};

const files = ref();
const fileInput = ref<HTMLInputElement | null>(null);
function handleFileChange() {
  files.value = fileInput.value?.files;
}

const fileName = ref();
const fileContent = ref();
const fileCid = ref();
const fileDirCid = ref();
const handleAddFile = async () => {
  const file = files.value[0];
  console.log(file);

  const response = await addFile(
    fileName.value,
    lsOutput.value[0].cid,
    // fileContent.value,
    file,
  );
  fileCid.value = response.data.fileCid;
  fileDirCid.value = response.data.dirCid;
};

const fileData = ref();
const handleGetFile = async () => {
  const response = await getFile(fileCid.value);

  console.log(fileCid.value, response.data);
  fileData.value = response.data;
};

const directoryContents = ref();
const handleGetDirectoryContents = async () => {
  const response = await getDirectory(fileDirCid.value, undefined);
  directoryContents.value = response.data.map((item) => {
    return {
      cid: item.cid,
      name: item.name,
      path: item.path,
    };
  });
};
</script>

<style scoped></style>
