import React from "react";
import { render } from "@testing-library/react";
import Layout from "./index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<Layout> component", () => {
  it("Should render component Layout", () => {
    const component = shallow(<Layout />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("Should render 1 '.layout' element inside", () => {
    const layout = render(<Layout />);
    expect(layout.container.childElementCount).toBe(1);
    expect(layout.container.firstChild.className).toBe("layout");
  });

  it("Should render 2 '.layout__panel' elements inside", () => {
    const layout = render(<Layout />);
    expect(layout.container.firstChild.childElementCount).toBe(2);

    layout.container.firstChild.childNodes.forEach((node) =>
      expect(node.className).toBe("layout__panel")
    );
  });
});
