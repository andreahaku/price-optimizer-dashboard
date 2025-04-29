<script setup lang="ts">
import { onMounted } from "vue";
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

onMounted(() => {
  if (store.weatherData.length === 0) {
    store.fetchWeather();
  }
});
</script>

<template>
  <tr>
    <td class="border-r border-gray-100 px-4 py-2 text-left text-sm text-gray-600">Meteo</td>
    <td v-for="(day, index) in store.days" :key="day.date" class="border-b border-gray-200 py-1">
      <div class="text-[24px]">{{ getWeatherEmoji(store.weatherData[index]) }}</div>
    </td>
  </tr>
</template>
