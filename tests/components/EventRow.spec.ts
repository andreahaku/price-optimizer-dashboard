import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EventRow from "@/components/EventRow.vue";
import { createTestingPinia } from "@pinia/testing";

describe("EventRow.vue", () => {
  it("mounts properly", () => {
    const wrapper = mount(EventRow, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
