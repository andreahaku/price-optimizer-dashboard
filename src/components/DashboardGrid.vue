<script setup lang="ts">
import { ref } from "vue";
import { useDashboardStore } from "@/stores/useDashboardStore";
import OccupancyRow from "./OccupancyRow.vue";
import RoomPriceRow from "./RoomPriceRow.vue";
import HolidayRow from "./HolidayRow.vue";
import EventRow from "./EventRow.vue";
import WeatherRow from "./WeatherRow.vue";

const store = useDashboardStore();
const showExtraRows = ref(true);
</script>

<template>
  <div class="overflow-x-auto rounded border border-gray-200 bg-white shadow-sm">
    <table class="min-w-full text-center text-sm text-gray-700">
      <thead>
        <tr>
          <th class="bg-white px-4 py-2 text-left text-sm font-semibold text-gray-700"></th>
          <th
            v-for="(day, i) in store.days"
            :key="day.date"
            class="border-l border-gray-200 px-2 py-3"
            :class="[
              day.label === 'SAB' || day.label === 'DOM' || day.holiday
                ? 'bg-violet-100'
                : 'bg-white',
            ]"
          >
            <div class="text-xs font-bold text-violet-900">{{ day.label }}</div>
            <div class="text-[10px] text-gray-500">{{ day.date.slice(5) }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <OccupancyRow :show="showExtraRows" @toggle-extras="showExtraRows = !showExtraRows" />
        <transition-group name="fade-slide" mode="out-in">
          <HolidayRow v-if="showExtraRows" />
          <EventRow v-if="showExtraRows" />
          <WeatherRow v-if="showExtraRows" />
        </transition-group>
        <RoomPriceRow v-for="room in store.rooms" :key="room.type" :room="room" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
