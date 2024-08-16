<template>
  <div
    class="w-full h-[605px] sm:h-[595px] xl:h-[695px] flex flex-col justify-center items-center relative -mt-[60px] z-50 bg-[#0c2977]"
  >
    <img
      v-if="showContent"
      src="@assets/img/story-telling/map.png"
      alt="World Map"
      class="w-full sm:w-[700px] xl:w-[1000px] absolute md:top-[58px]"
    />

    <div
      class="absolute -bottom-[20px] sm:bottom-[50px] xl:-bottom-[23px] left-1/2 -translate-x-1/2 pb-28 sm:pb-0 w-[400px] sm:w-[640px] xl:w-[740px]"
    >
      <div class="relative w-full flex justify-center">
        <img
          src="@/assets/img/story-telling/textImg.png"
          alt="text Image"
          class="h-[151px] sm:h-[190px] xl:h-[230px] w-[640px] xl:w-[740px]"
        />
        <img
          src="@/assets/img/story-telling/boy.png"
          alt="text Image"
          class="absolute -top-[63px] sm:-top-[183px] xl:-top-[211px] right-[83px] sm:right-[90px] xl:right-[85px] w-[80px] sm:w-[200px] xl:w-[245px] h-[100px] sm:h-[230px] xl:h-[270px]"
        />
        <p
          v-if="showContent"
          class="absolute top-[25px] sm:top-[30px] md:top-[32px] xl:top-[37px] left-[95px] sm:left-[123px] xl:left-[118px] text-xs sm:text-lg xl:text-[25px] pl-0 sm:pl-[30px] text-white font-medium"
        >
          Sharon
        </p>
        <p
          v-if="showContent"
          class="absolute top-[65px] sm:top-[84px] xl:top-[95px] left-[20px] sm:left-[55px] xl:left-[45px] text-[10px] sm:text-[14px] xl:text-[17px] w-[335px] sm:w-[478px] xl:w-[580px] leading-5 sm:leading-6 xl:leading-8"
        >
          Pick your location on the map and complete your address! Make sure to confirm
          all information is correct and once that’s done, let’s go plant your tree.
        </p>
      </div>
    </div>

    <button
      @click="showContent = true"
      class="w-[75px] xl:w-[100px] h-[40px] xl::h-[50px] border-white border-[1px] xl:border-2 border-solid rounded-tr-[15px] rounded-bl-[15px] xl:font-medium text-base xl:text-[22px] text-white absolute bottom-5 sm:bottom-1 xl:bottom-6 right-5 sm:right-2 xl:right-16"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "StoryTelling",
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style scoped>
/* You can keep your existing styles here or add new ones as needed */
</style>
