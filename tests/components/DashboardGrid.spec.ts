import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import DashboardGrid from "@/components/DashboardGrid.vue";
import { createTestingPinia } from "@pinia/testing";

describe("DashboardGrid.vue", () => {
  it("mounts properly", () => {
    const wrapper = mount(DashboardGrid, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders OccupancyRow and RoomPriceRow", () => {
    const wrapper = mount(DashboardGrid, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.findComponent({ name: "OccupancyRow" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "RoomPriceRow" }).exists()).toBe(true);
  });

  it("toggles extra rows when clicking on OccupancyRow", async () => {
    const wrapper = mount(DashboardGrid, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const occupancyRow = wrapper.findComponent({ name: "OccupancyRow" });
    await occupancyRow.vm.$emit("toggle-extras");

    expect(wrapper.vm.showExtraRows).toBe(false);
  });
});
