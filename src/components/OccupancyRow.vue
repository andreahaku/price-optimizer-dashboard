<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();
</script>

<template>
  <tr class="bg-white">
    <td class="px-4 py-2 text-left text-sm font-medium text-gray-500">Occupazione</td>
    <td v-for="day in store.days" :key="day.date" class="py-1">
      <div class="relative mx-auto h-4 w-8 rounded bg-purple-100">
        <div
          class="absolute top-0 left-0 h-full rounded bg-purple-500"
          :style="{ width: day.occupancy + '%' }"
        ></div>
        <div class="absolute inset-0 text-[10px] leading-4 font-bold text-gray-800">
          {{ day.occupancy }}%
        </div>
      </div>
    </td>
  </tr>
</template>
