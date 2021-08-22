import { expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";

import Number from "../app/Number";

describe("The Number Field", () => {
  it("should render and click", () => {
    const setSelected = jest.fn();
    const { container } = render(
      <Number
        thisNumber={34}
        selectedNumber={undefined}
        setSelected={setSelected}
      />
    );

    expect(container.children).toHaveLength(1);
    expect(container.children[0].tagName).toBe("BUTTON");
    expect(container.children[0].className).toEqual("number");

    expect(setSelected.mock.calls.length).toBe(0);

    fireEvent.click(container.children[0]);

    expect(setSelected.mock.calls.length).toBe(1);
    expect(setSelected.mock.calls[0][0]).toBe(34);
  });

  it("should set the appropriate class when selected", () => {
    const setSelected = jest.fn();
    const { container } = render(
      <Number thisNumber={34} selectedNumber={34} setSelected={setSelected} />
    );

    expect(container.children).toHaveLength(1);
    expect(container.children[0].tagName).toBe("BUTTON");
    expect(container.children[0].className).toEqual("number selected");
  });

  it("should set the appropriate class when is a multiple", () => {
    const setSelected = jest.fn();
    const { container } = render(
      <Number thisNumber={34} selectedNumber={17} setSelected={setSelected} />
    );

    expect(container.children).toHaveLength(1);
    expect(container.children[0].tagName).toBe("BUTTON");
    expect(container.children[0].className).toEqual("number highlight");
  });
});
