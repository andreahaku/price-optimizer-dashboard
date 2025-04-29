<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();
</script>

<template>
  <tr>
    <td class="px-4 py-2 text-left text-sm font-medium text-gray-600">Occupazione</td>
    <td
      v-for="(day, index) in store.days"
      :key="day.date"
      class="relative border-b border-l border-gray-200 px-3 py-6 text-right text-sm font-medium text-gray-900"
    >
      <div
        class="absolute inset-0 opacity-50"
        :style="{
          backgroundColor: `hsl(${(store.averageOccupancyByDay[index] / 100) * 120}, 100%, 80%)`,
        }"
      ></div>
      <div class="relative right-3 z-10">{{ store.averageOccupancyByDay[index] }}%</div>
    </td>
  </tr>
</template>
