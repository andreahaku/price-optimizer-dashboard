import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import RoomPriceRow from "@/components/RoomPriceRow.vue";

describe("RoomPriceRow.vue", () => {
  it("mounts properly with prices", () => {
    const wrapper = mount(RoomPriceRow, {
      props: {
        room: { type: "Camera Test", prices: [100, 150], occupancy: [50, 70] },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("100 €");
    expect(wrapper.text()).toContain("150 €");
  });
});
