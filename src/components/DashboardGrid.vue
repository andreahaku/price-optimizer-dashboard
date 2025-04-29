<script setup lang="ts">
import { useDashboardStore } from "@/stores/useDashboardStore";
import OccupancyRow from "./OccupancyRow.vue";
import HolidayRow from "./HolidayRow.vue";
import EventRow from "./EventRow.vue";
import WeatherRow from "./WeatherRow.vue";
import RoomPriceRow from "./RoomPriceRow.vue";

const store = useDashboardStore();
</script>

<template>
  <div class="overflow-x-auto rounded border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full text-center text-sm text-gray-700">
      <thead>
        <tr class="bg-violet-100">
          <th class="bg-white px-4 py-2 text-left text-sm font-semibold text-gray-700"></th>
          <th v-for="day in store.days" :key="day.date" class="border-l border-gray-200 px-2 py-3">
            <div class="text-xs font-bold text-violet-900">{{ day.label }}</div>
            <div class="text-[10px] text-gray-500">{{ day.date.slice(5) }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <OccupancyRow />
        <HolidayRow />
        <EventRow />
        <WeatherRow />
        <RoomPriceRow v-for="room in store.rooms" :key="room.type" :room="room" />
      </tbody>
    </table>
  </div>
</template>
