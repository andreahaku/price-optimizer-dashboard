import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    days: [
      {
        date: "2025-01-01",
        label: "LUN",
        occupancy: 100,
        holiday: true,
        event: false,
        weather: "sunny",
      },
      {
        date: "2025-01-02",
        label: "MAR",
        occupancy: 80,
        holiday: false,
        event: false,
        weather: "cloudy",
      },
      {
        date: "2025-01-03",
        label: "MER",
        occupancy: 20,
        holiday: false,
        event: false,
        weather: "rainy",
      },
      {
        date: "2025-01-04",
        label: "GIO",
        occupancy: 0,
        holiday: false,
        event: true,
        weather: "sunny",
      },
      {
        date: "2025-01-05",
        label: "VEN",
        occupancy: 50,
        holiday: false,
        event: false,
        weather: "cloudy",
      },
      {
        date: "2025-01-06",
        label: "SAB",
        occupancy: 80,
        holiday: true,
        event: false,
        weather: "snowy",
      },
      {
        date: "2025-01-07",
        label: "DOM",
        occupancy: 0,
        holiday: false,
        event: true,
        weather: "cloudy",
      },
    ],
    rooms: [
      {
        type: "Camera singola standard",
        prices: [190, 200, 150, 150, 155, 220, 90],
      },
      {
        type: "Camera doppia standard",
        prices: [190, 200, 150, 150, 155, 220, 90],
      },
      {
        type: "Suite",
        prices: [350, 300, 250, 200, 255, 320, 190],
      },
    ],
  }),
});
