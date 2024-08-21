<template>
  <div class="storytelling-container">
    <img
      v-if="currentPage === 1"
      src="@/assets/img/story-telling/map.png"
      alt="World Map"
      class="storytelling-map"
      @click="showMap"
      :style="{ visibility: isMapOpen ? 'hidden' : 'visible' }"
    />

    <div
      class="storytelling-content"
      v-if="isTextImagePage"
      :style="{ visibility: isMapOpen ? 'hidden' : 'visible' }"
    >
      <div class="text-image-container">
        <img
          src="@/assets/img/story-telling/textImg.png"
          alt="Text Image"
          class="text-image"
        />
        <img src="@/assets/img/story-telling/boy.png" alt="Boy Image" class="boy-image" />
        <p v-if="currentPage === 1" class="storytelling-title">Sharon</p>
        <p v-if="currentPage === 1" class="storytelling-description">
          Pick your location on the map and complete your address! Make sure to confirm
          all information is correct and once that’s done, let’s go plant your tree.
        </p>
      </div>
    </div>

    <div v-if="isMapOpen" class="w-full h-full">
      <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100vw; height: 900px"
      />
    </div>

    <div v-if="currentPage >= 2 && currentPage <= 4" class="relative">
      <img
        src="@/assets/img/story-telling/forest.png"
        alt="Forest background"
        class="w-full xl:w-[1400px] h-screen xl:h-[700px]"
      />
      <div class="absolute top-[100px] left-0 flex flex-row xl:gap-[50px] xl:pl-[85px]">
        <div class="relative z-40">
          <img
            src="@/assets/img/story-telling/paper.png"
            alt="Paper background"
            class="paper-style"
          />
          <p v-if="currentPage === 2" class="text-style">
            There are three parts to any tree: the branches and the leaves, the trunk, and
            lastly the roots. The branches and leaves represent your connection with other
            users. You can customize the branches and the leaves to your liking later in
            the game.
          </p>
          <p v-if="currentPage === 3" class="text-style">
            Now let’s move on to the trunk! It represents the core of your business. Each
            ring is a piece of information regarding your business. The more information
            you provide regarding your business’s operations, the sturdier it’ll get.
          </p>
          <p v-if="currentPage === 4" class="text-style">
            Lastly, you’ll be able to visualize the roots once you complete MeOh’s
            Emission control report. There are 3 types of emissions. You’ll be able to
            check which one your business produces the most with the report.
          </p>
        </div>
        <div class="z-30 hidden sm:block">
          <img
            v-if="currentPage === 2"
            src="@/assets/img/story-telling/tree.png"
            alt="Forest background"
            class="image-style"
          />
          <img
            v-if="currentPage === 3"
            src="@/assets/img/story-telling/root.png"
            alt="Root background"
            class="image-style"
          />
          <img
            v-if="currentPage === 4"
            src="@/assets/img/story-telling/total.png"
            alt="Tree background"
            class="image-style"
          />
        </div>
      </div>
      <img
        src="@/assets/img/story-telling/stand-girl.png"
        alt="Girl"
        class="stand-girl"
      />
    </div>

    <div v-if="currentPage === 5" class="storytelling-content">
      <div class="text-image-container">
        <img
          src="@/assets/img/story-telling/textImg.png"
          alt="Text Image"
          class="text-image z-50"
        />
        <img
          src="@/assets/img/story-telling/boy.png"
          alt="Boy Image"
          class="boyImage-style"
        />
        <p class="storytelling-title z-50">Sharon</p>
        <p class="sharon-text">You’re all set! Let’s dive into MeOh world!</p>
      </div>
    </div>

    <div
      class="flex justify-between absolute bottom-0 w-full pb-4 px-2 sm:px-[60px] xl:px-[40px] z-50"
    >
      <button
        @click="previousPage"
        :style="{ visibility: currentPage === 0 ? 'hidden' : 'visible' }"
        :disabled="currentPage === 0"
        class="storytelling-button"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :style="{ visibility: currentPage === pages.length - 1 ? 'hidden' : 'visible' }"
        :disabled="currentPage === pages.length - 1"
        class="storytelling-button"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryTelling",
  data() {
    return {
      currentPage: 0,
      pages: [1, 2, 3, 4, 5, 6],
      isMapOpen: false,
      center: { lat: 51.093048, lng: 6.84212 },
    };
  },
  computed: {
    isTextImagePage() {
      return this.currentPage === 0 || this.currentPage === 1;
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pages.length - 1) {
        this.currentPage++;
      }
    },
    showMap() {
      this.isMapOpen = true;
    },
  },
};
</script>

<style scoped>
.storytelling-container {
  @apply w-full h-[605px] sm:h-[595px] xl:h-[701px] flex flex-col justify-center items-center relative -mt-[60px] z-50 bg-[#0c2977];
}

.storytelling-map {
  @apply w-full sm:w-[700px] xl:w-[1000px] absolute md:top-[58px];
}

.storytelling-content {
  @apply absolute -bottom-[20px] sm:bottom-[50px] xl:-bottom-[23px] left-1/2 -translate-x-1/2 pb-28 sm:pb-0 w-[400px] sm:w-[640px] xl:w-[740px];
}

.text-image-container {
  @apply relative w-full flex justify-center;
}

.text-image {
  @apply h-[151px] sm:h-[190px] xl:h-[230px] w-[640px] xl:w-[740px];
}

.boy-image {
  @apply absolute -top-[63px] sm:-top-[183px] xl:-top-[211px] right-[83px] sm:right-[90px] xl:right-[85px] w-[80px] sm:w-[200px] xl:w-[245px] h-[100px] sm:h-[230px] xl:h-[270px];
}

.storytelling-title {
  @apply absolute top-[25px] sm:top-[30px] md:top-[32px] xl:top-[37px] left-[95px] sm:left-[123px] xl:left-[133px] text-xs sm:text-lg xl:text-[25px] pl-0 sm:pl-[30px] text-white font-medium;
}

.storytelling-description {
  @apply absolute top-[65px] sm:top-[84px] xl:top-[95px] left-[20px] sm:left-[55px] xl:left-[45px] text-[10px] sm:text-[14px] xl:text-[17px] w-[335px] sm:w-[478px] xl:w-[580px] leading-5 sm:leading-6 xl:leading-8;
}

.storytelling-button {
  @apply w-[75px] xl:w-[150px] h-[40px] xl:h-[50px] border-white border-[1px] xl:border-2 border-solid rounded-tr-[15px] rounded-bl-[15px] xl:font-medium text-[10px] xl:text-[20px] text-white;
}

.text-style {
  @apply w-[235px] lg:w-[255px] text-gray-500 absolute top-[195px] sm:top-[160px] lg:top-[190px] xl:top-[105px] left-[95px] sm:left-[115px] lg:left-[155px] text-[16px] lg:text-[19px];
}

.image-style {
  @apply w-[400px] xl:w-[480px] h-[500px] xl:h-[580px] mt-[100px] xl:mt-0;
}

.stand-girl {
  @apply w-[170px] sm:w-[220px] xl:w-[450px] h-[210px] sm:h-[300px] xl:h-[600px] absolute bottom-[90px] sm:bottom-[113px] xl:top-[100px] -right-[15px] sm:right-0 xl:right-[30px] z-40;
}

.paper-style {
  @apply w-[550px] lg:w-[550px] h-[650px] lg:h-[750px] mt-9 sm:mt-3 xl:-mt-[70px];
}

.boyImage-style {
  @apply absolute -top-[214px] sm:-top-[253px] xl:-top-[345px] right-[102px] sm:right-[175px] xl:right-[125px] w-[200px] sm:w-[300px] xl:w-[450px] h-[250px] sm:h-[300px] xl:h-[400px] z-30;
}

.sharon-text {
  @apply absolute z-50 top-[65px] sm:top-[84px] xl:top-[120px] left-[20px] sm:left-[55px] xl:left-[45px] text-[16px] xl:text-[22px] w-[335px] sm:w-[478px] xl:w-[580px] leading-5 sm:leading-6 xl:leading-8 text-center;
}
</style>
