<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
const store = useDashboardStore();

function getWeatherEmoji(condition: string) {
  switch (condition) {
    case "sunny":
      return "☀️";
    case "cloudy":
      return "☁️";
    case "rainy":
      return "🌧️";
    case "snowy":
      return "❄️";
    default:
      return "❓";
  }
}
</script>

<template>
  <tr>
    <td class="px-4 py-2 text-left text-sm text-gray-600">Meteo</td>
    <td v-for="day in store.days" :key="day.date" class="py-1">
      <div class="text-[12px]">{{ getWeatherEmoji(day.weather) }}</div>
    </td>
  </tr>
</template>
