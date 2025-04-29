<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();
</script>

<template>
  <tr>
    <td class="bg-gray-50 px-4 py-2 text-left text-sm font-bold text-gray-600 hover:bg-gray-200">
      Royal Hotel
    </td>
    <td v-for="day in store.days" :key="day.date" class="border-b border-l border-gray-200 py-6">
      <div class="relative mx-auto h-4 w-10 rounded-full bg-purple-100">
        <div
          class="absolute top-0 left-0 h-full rounded-full bg-purple-500"
          :style="{ width: day.occupancy + '%' }"
        ></div>
        <div class="absolute inset-0 text-[10px] leading-4 font-semibold text-gray-900">
          {{ day.occupancy }}%
        </div>
      </div>
    </td>
  </tr>
</template>
