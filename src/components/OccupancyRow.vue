<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();

function occupancyColor(percentage: number) {
  const hue = (percentage / 100) * 120;
  return `hsl(${hue}, 100%, 80%)`;
}
</script>

<template>
  <tr>
    <td
      class="border-t border-b border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-bold text-gray-600 hover:bg-gray-200"
    >
      Royal Hotel
    </td>
    <td
      v-for="day in store.days"
      :key="day.date"
      class="relative border-b border-l border-gray-200 px-3 py-6 text-right text-sm font-medium text-gray-900"
    >
      <div
        class="absolute inset-0 opacity-50"
        :style="{ backgroundColor: occupancyColor(day.occupancy) }"
      ></div>

      <div class="relative right-3 z-10">{{ day.occupancy }}%</div>
    </td>
  </tr>
</template>
