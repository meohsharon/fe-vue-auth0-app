<template>
  <!-- https://medium.com/@sj.anyway/custom-right-click-context-menu-in-vue3-b323a3913684 -->
  <div
    class="absolute h-fit w-48 z-50 text-sm text-right bg-white border-1 rounded cursor-pointer"
    :style="{ top: y + 'px', left: x + 'px' }"
  >
    <div
      class="p-3 hover:bg-gray-200"
      v-for="action in actions"
      :key="action.action"
      @click="emitAction(action.action)"
    >
      {{ action.label }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { actions, x, y } = defineProps(["actions", "x", "y"]);
const emit = defineEmits(["action-clicked"]);

const emitAction = (action) => {
  emit("action-clicked", action);
};
</script>
