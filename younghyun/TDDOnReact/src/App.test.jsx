import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("신나는 리액트 테스트");
  });
});
