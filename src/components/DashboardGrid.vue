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
  <div class="overflow-x-auto rounded border bg-white">
    <table class="min-w-full text-center">
      <thead>
        <tr class="bg-gray-50">
          <th class="px-4 py-2 text-left"></th>
          <th
            v-for="day in store.days"
            :key="day.date"
            class="px-2 py-2 text-xs font-semibold text-gray-600"
          >
            <div>{{ day.label }}</div>
            <div class="text-[10px] text-gray-400">{{ day.date.slice(5) }}</div>
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
