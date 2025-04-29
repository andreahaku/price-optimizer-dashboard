<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();
</script>

<template>
  <tr>
    <td class="px-4 py-2 text-left text-sm text-gray-600">Eventi</td>
    <td v-for="day in store.days" :key="day.date" class="py-1">
      <div v-if="day.event" class="mx-auto h-2 w-3/4 rounded bg-yellow-300"></div>
    </td>
  </tr>
</template>
