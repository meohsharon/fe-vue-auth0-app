<template>
  <div class="content-center text-center">
    <div class="my-20">
      <input type="file" @change="onChange($event)" />
      <button
        @click="onSubmit"
        class="bg-red-400 hover:bg-gray-800 hover:text-red-600 hover:border-transparent rounded p-4 w-44"
      >
        Upload
      </button>
    </div>

    <div v-if="cid" class="pt-12">
      <a
        class="font-medium text-base md:text-xl text-blue-700"
        :href="cid"
        target="_blank"
        >{{ cid }}</a
      >
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

const cid = ref(null);
const onSubmit = async () => {
  try {
    const upload = await pinata.upload.file(file.value);
    cid.value = `https://ipfs.io/ipfs/${upload.IpfsHash}`;
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
