import React from "react";

import List from "./List";

export default function App() {
  const tasks = [
    { id: 1, title: "신나는 리액트 테스트" },
    { id: 2, title: "시그니엘 매입" },
  ];

  return (
    <div>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </div>
  );
}
