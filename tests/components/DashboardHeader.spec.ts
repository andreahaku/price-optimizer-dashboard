import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import DashboardHeader from "@/components/DashboardHeader.vue";

describe("DashboardHeader.vue", () => {
  it("renders the current date input", () => {
    const wrapper = mount(DashboardHeader);
    const input = wrapper.find("input[type='text']");
    expect(input.exists()).toBe(true);
    expect(input.element.value).toBe("01 Gennaio 2025");
  });

  it("renders the 'Personalizza prezzi' button", () => {
    const wrapper = mount(DashboardHeader);
    expect(wrapper.text()).toContain("Personalizza prezzi");
  });

  it("renders the 'Stato di invio: ok' status", () => {
    const wrapper = mount(DashboardHeader);
    expect(wrapper.text()).toContain("Stato di invio");
    expect(wrapper.text()).toContain("ok");
  });
});
