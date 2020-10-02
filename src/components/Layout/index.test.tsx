import React from "react";
import { render } from "@testing-library/react";
import Layout from "./index";

test("renders Layout", () => {
  const layout = render(<Layout />);
  expect(layout.container.childElementCount).toBe(1);
  expect(layout.container.firstChild.childElementCount).toBe(2);
  expect(layout.container.firstChild.className).toBe("layout");
  layout.container.firstChild.childNodes.forEach((node) =>
    expect(node.className).toBe("layout__panel")
  );
});
