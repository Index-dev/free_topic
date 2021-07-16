import React from "react";

import { render } from "@testing-library/react";

import List from "./List";
import tasks from "../fixtures/tasks";

describe("List", () => {
  it("renders tasks", () => {
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("신나는 리액트 테스트");
    expect(container).toHaveTextContent("시그니엘 거주");
  });
});
