<template>
  <div class="content-center text-center">
    <div class="my-20">
      <input type="file" @change="onChange($event)" />
      <button
        @click="onSubmit"
        class="bg-red-500 hover:bg-gray-500 hover:text-white hover:border-transparent rounded p-2 lg:p-4 w-20 lg:w-44 text-sm lg:text-base"
      >
        Upload
      </button>
    </div>

    <div
      v-if="url"
      class="text-left border-dashed border-2 mx-2 sm:mx-8 lg:mx-16 xl:mx-32 px-2 sm:px-8 lg:px-16 xl:px-32"
    >
      <div class="pt-12 lg:text-xl sm:text-base">
        IPFS URL:
        <a
          class="font-medium lg:text-base sm:text-base text-blue-700"
          :href="url"
          target="_blank"
        >
          <pre> {{ url }}</pre>
        </a>
      </div>

      <div class="pt-12 lg:text-xl sm:text-base">
        File Details:
        <pre class="font-medium lg:text-base sm:text-base text-blue-700"
          >{{ uploadDetails }} </pre
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { PinataSDK } from "pinata";
import { useNotification } from "@kyvg/vue3-notification";
import CONFIG from "@helpers/config";

const { PINATA_JWT, PINATA_GATEWAY } = CONFIG;

const notification = useNotification();

const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: PINATA_GATEWAY,
});

const file = ref(null);
const fileName = computed(() => file.value?.name);
const onChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
  }
};

const url = ref(null);
const uploadDetails = ref(null);
const onSubmit = async () => {
  try {
    const upload = await pinata.upload.file(file.value);
    url.value = `https://ipfs.io/ipfs/${upload.IpfsHash}`;
    uploadDetails.value = upload;

    notification.notify({
      type: "success",
      title: "IPFS File Upload",
      text: `File '${fileName.value}'' Uploaded to Pinata/IPFS. CID = ${upload.IpfsHash}`,
    });
  } catch (error) {
    console.log(error);
    notification.notify({
      type: "error",
      title: "Error",
      text: "Failed",
    });
  }
};
</script>
