import React from "react";
import { Form } from "./index";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { AutoComplete } from "antd";
import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IPoint } from "../../store/Point/PointStore";

const VARIANTS: IPoint[] = [
  {
    value: "kek",
    coords: [0, 0],
    key: 1,
  },
];
let GET_VARIANTS_MOCK: any;
let ON_SUBMIT_MOCK: any;

beforeEach(() => {
  GET_VARIANTS_MOCK = jest.fn(() => Promise.resolve(VARIANTS));
  ON_SUBMIT_MOCK = jest.fn();
});

describe("<Form> component (testing-library)", () => {
  it("should render component Form", () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the field", () => {
    const { getByRole, getByText } = render(<Form />);
    const field = getByRole("combobox");
    expect(field).toBeInTheDocument();
    expect(field).toHaveDisplayValue("");
    // additional
    expect(getByText(/введите адрес/i)).toBeInTheDocument();
  });

  it("on change, the field's value should be updated", () => {
    const value = "kek";
    const { getByRole } = render(<Form />);
    const field = getByRole("combobox");
    userEvent.type(field, value);
    expect(field).toHaveDisplayValue(value);
  });

  it("on change, the getVariants prop should be called", () => {
    const { getByRole } = render(<Form getVariants={GET_VARIANTS_MOCK} />);
    fireEvent.change(getByRole("combobox"), {
      target: { value: "kek" },
    });
    waitFor(() => {
      expect(GET_VARIANTS_MOCK).toHaveBeenCalledTimes(1);
    });
  });

  it("on change, the options of that field in the component should be filled", async () => {
    const { getByRole, findByRole } = render(
      <Form getVariants={GET_VARIANTS_MOCK} />
    );
    fireEvent.change(getByRole("combobox"), {
      target: { value: "kek" },
    });
    const option = await findByRole("option");
    expect(option).toBeInTheDocument();
    expect(option.textContent).toBe("kek");
  });

  // it("on submitting should call onSubmit func from props", async () => {
  //   const { getByRole, findByRole } = render(
  //     <Form getVariants={GET_VARIANTS_MOCK} onSubmit={ON_SUBMIT_MOCK} />
  //   );
  //   fireEvent.change(getByRole("combobox"), {
  //     target: { value: "kek" },
  //   });

  //   const option = await findByRole("option");
  //   act(() => {
  //     fireEvent.click(option);
  //   });

  //   expect(ON_SUBMIT_MOCK).toHaveBeenCalled();
  // });
});

describe("<Form> component (Enzyme)", () => {
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
    const wrapper = shallow(<Form onSubmit={ON_SUBMIT_MOCK} />);
    wrapper.find(AutoComplete).simulate("select");
    expect(ON_SUBMIT_MOCK).toHaveBeenCalledTimes(1);
  });

  it("on search should call getVariants func from props", () => {
    const query = "kek";
    const wrapper = shallow(<Form getVariants={GET_VARIANTS_MOCK} />);
    wrapper.find(AutoComplete).simulate("search", query);
    expect(GET_VARIANTS_MOCK).toHaveBeenCalledTimes(1);
    expect(GET_VARIANTS_MOCK).toHaveBeenCalledWith(query);
  });

  it("on search should fill options", async () => {
    const wrapper = shallow(<Form getVariants={GET_VARIANTS_MOCK} />);
    await wrapper.find(AutoComplete).simulate("search", "kek");
    expect(wrapper.find(AutoComplete).prop("options")).toEqual(VARIANTS);
  });
});
