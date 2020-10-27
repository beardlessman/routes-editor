import React from "react";
import { Form } from "./index";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { AutoComplete } from "antd";

describe("<Form> component", () => {
  it("should render component Form", () => {
    const component = shallow(<Form />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it("should render an input tag", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(AutoComplete).exists()).toBe(true);
  });

  it("the default value for field should be empty", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(AutoComplete).prop("value")).toBe("");
  });

  it("on change of value in the field, the state of that field in the component should be updated", () => {
    const wrapper = shallow(<Form />);
    wrapper.find(AutoComplete).simulate("change", "kek");
    expect(wrapper.find(AutoComplete).prop("value")).toBe("kek");
  });

  it("on submitting, the state of that field in the component should be reseted", () => {
    const wrapper = shallow(<Form />);
    wrapper.find(AutoComplete).simulate("select");
    expect(wrapper.find(AutoComplete).prop("value")).toBe("");
    expect(wrapper.find(AutoComplete).prop("options")).toEqual([]);
  });

  it("on submitting should call onSubmit func from props", () => {
    const onSubmitMock = jest.fn();
    const wrapper = shallow(<Form onSubmit={onSubmitMock} />);
    wrapper.find(AutoComplete).simulate("select");
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it("on search should call getVariants func from props", () => {
    const getVariantsMock = jest.fn();
    const query = "kek";
    const wrapper = shallow(<Form getVariants={getVariantsMock} />);
    wrapper.find(AutoComplete).simulate("search", query);
    expect(getVariantsMock).toHaveBeenCalledTimes(1);
    expect(getVariantsMock).toHaveBeenCalledWith(query);
  });

  it("on search should fill options", async () => {
    const variants = [
      {
        value: "string",
        coords: [0, 0],
        key: 1,
      },
    ];
    const query = "Томск";
    const getVariantsMock = jest.fn(() => Promise.resolve(variants));

    const wrapper = shallow(<Form getVariants={getVariantsMock} />);
    await wrapper.find(AutoComplete).simulate("search", query);
    expect(wrapper.find(AutoComplete).prop("options")).toEqual(variants);
  });
});
