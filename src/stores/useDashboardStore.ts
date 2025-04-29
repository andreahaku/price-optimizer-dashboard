import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    days: [
      { date: "2025-01-01", label: "LUN", holiday: true, event: false, weather: "sunny" },
      { date: "2025-01-02", label: "MAR", holiday: false, event: false, weather: "cloudy" },
      { date: "2025-01-03", label: "MER", holiday: false, event: false, weather: "rainy" },
      { date: "2025-01-04", label: "GIO", holiday: false, event: true, weather: "sunny" },
      { date: "2025-01-05", label: "VEN", holiday: true, event: false, weather: "cloudy" },
      { date: "2025-01-06", label: "SAB", holiday: true, event: false, weather: "snowy" },
      { date: "2025-01-07", label: "DOM", holiday: false, event: true, weather: "cloudy" },
    ],
    rooms: [
      {
        type: "Camera singola standard",
        prices: [190, 200, 150, 150, 155, 220, 90],
        occupancy: [100, 80, 20, 0, 50, 80, 0],
      },
      {
        type: "Camera doppia standard",
        prices: [190, 200, 150, 150, 155, 220, 90],
        occupancy: [90, 70, 10, 0, 40, 70, 0],
      },
      {
        type: "Suite",
        prices: [350, 300, 250, 200, 255, 320, 190],
        occupancy: [80, 60, 30, 0, 60, 90, 0],
      },
    ],
  }),
  getters: {
    averageOccupancyByDay(state) {
      const days = state.days.length;
      const result = [];
      for (let i = 0; i < days; i++) {
        const sum = state.rooms.reduce((acc, room) => acc + room.occupancy[i], 0);
        result.push(Math.round(sum / state.rooms.length));
      }
      return result;
    },
  },
});
