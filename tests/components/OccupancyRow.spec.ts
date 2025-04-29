import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import OccupancyRow from "@/components/OccupancyRow.vue";
import { createTestingPinia } from "@pinia/testing";

describe("OccupancyRow.vue", () => {
  it("emits toggle-extras on click", async () => {
    const wrapper = mount(OccupancyRow, {
      props: { show: true },
      global: {
        plugins: [createTestingPinia()],
      },
    });

    await wrapper.find("td").trigger("click");

    expect(wrapper.emitted("toggle-extras")).toBeTruthy();
  });
});
