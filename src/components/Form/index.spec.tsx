import React from "react";
import { Form } from "./index";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const onSubmitMock = jest.fn();

describe("<Form> component", () => {
  it("should render component Form", () => {
    const component = shallow(<Form />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render an input tag", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("the default value for field should be empty", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("input").prop("value")).toBe("");
  });

  it("on change of value in the field, the state of that field in the component should be updated", () => {
    const wrapper = shallow(<Form />);

    wrapper.find("input").simulate("change", {
      target: {
        value: "kek",
      },
    });
    expect(wrapper.find("input").prop("value")).toBe("kek");
  });

  it("on submitting, the state of that field in the component should be reseted", () => {
    const wrapper = mount(<Form />);
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("input").prop("value")).toBe("");
  });

  it("on submitting should call onSubmit func from props", () => {
    const wrapper = mount(<Form onSubmit={onSubmitMock} />);
    wrapper.find("form").simulate("submit");
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
