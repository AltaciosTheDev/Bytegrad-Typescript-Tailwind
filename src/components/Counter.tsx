import React from "react";

export default function Counter({ todos }) {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length}{" "}
      todos completed
    </p>
  );
}
