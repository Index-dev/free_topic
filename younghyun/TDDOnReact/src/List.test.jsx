import React from "react";

import { render } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("renders tasks", () => {
    const tasks = [
      { id: 1, title: "신나는 리액트 테스트" },
      { id: 2, title: "시그니엘 매입" },
    ];
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("신나는 리액트 테스트");
    expect(container).toHaveTextContent("시그니엘 매입");
  });
});
