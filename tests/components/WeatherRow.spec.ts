import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import WeatherRow from "@/components/WeatherRow.vue";
import { createTestingPinia } from "@pinia/testing";

describe("WeatherRow.vue", () => {
  it("mounts properly", () => {
    const wrapper = mount(WeatherRow, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
