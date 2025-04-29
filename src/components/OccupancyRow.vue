<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();
const emit = defineEmits(["toggle-extras"]);
const props = defineProps<{ show: boolean }>();
</script>

<template>
  <tr>
    <td
      class="text-md h-full cursor-pointer bg-gray-200 px-4 py-6 text-left text-lg font-bold text-gray-800 hover:bg-gray-300"
      @click="emit('toggle-extras')"
    >
      <div class="flex h-full w-full items-center justify-between">
        Royal Hotel
        <span class="text-xl">{{ props.show ? "-" : "+" }}</span>
      </div>
    </td>
    <td
      v-for="(day, index) in store.days"
      :key="day.date"
      class="relative border-b border-l border-gray-200 px-3 py-6 text-center text-sm font-medium text-gray-900"
    >
      <div
        class="absolute inset-0 opacity-50"
        :style="{
          backgroundColor: `hsl(${(store.averageOccupancyByDay[index] / 100) * 120}, 100%, 80%)`,
        }"
      ></div>
      <div class="relative z-10 flex h-full items-center justify-center">
        {{ store.averageOccupancyByDay[index] }}%
      </div>
    </td>
  </tr>
</template>
