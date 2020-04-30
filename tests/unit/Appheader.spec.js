import { mount } from "@vue/test-utils";
import AppHeader from "@/components/Appheader";

describe("test AppHeader", () => {
  it("output: if user login show button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loginIn: true });

    await wrapper.vm.$nextTick()
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
  it("output: if user logout no show button", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
});
