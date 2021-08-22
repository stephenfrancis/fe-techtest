import { expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";

import Grid from "../app/Grid";

describe("The Grid", () => {
  it("should render with correct number of tiles", () => {
    const { container } = render(<Grid />);

    expect(container.children).toHaveLength(1);
    expect(container.children[0].tagName).toBe("DIV");
    expect(container.children[0].className).toEqual("grid");
    expect(container.children[0].children).toHaveLength(144);
    expect(container.children[0].children[0].innerHTML).toEqual("1");
    expect(container.children[0].children[0].className).toEqual("number");
    expect(container.children[0].children[143].innerHTML).toEqual("144");
  });
});
