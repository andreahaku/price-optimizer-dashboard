import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NavigationBar from "@/components/NavigationBar.vue";

describe("NavigationBar.vue", () => {
  it("renders 5 navigation icons", () => {
    const wrapper = mount(NavigationBar);
    const icons = wrapper.findAll("div.bg-gray-300");
    expect(icons.length).toBe(5);
  });
});
