import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HolidayRow from "@/components/HolidayRow.vue";
import { createTestingPinia } from "@pinia/testing";

describe("HolidayRow.vue", () => {
  it("mounts properly", () => {
    const wrapper = mount(HolidayRow, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
