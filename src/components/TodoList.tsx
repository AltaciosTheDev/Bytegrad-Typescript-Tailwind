import { useState } from "react";
import DeleteButton from "./DeleteButton";

const initialTodos = [
  { id:1, text: "buy groceries", isCompleted: false },
  { id:2, text: "walk the dog", isCompleted: true },
  { id:3, text: "do laundry", isCompleted: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const handleClick =(id) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => {
      if(prevTodo.id == id){
        return {...prevTodo, isCompleted: !prevTodo.isCompleted}
      }
      else{
        return prevTodo
      }
    }))
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-black/[8%]"
            onClick={() => handleClick(todo.id)}
          >
            <span
              className={`${
                todo.isCompleted ? "line-through text-[#ccc]" : ""
              }`}
            >
              {todo.text}
            </span>
            <DeleteButton id={todo.id} setTodos={setTodos}/>
          </li>
        );
      })}
    </ul>
  );
}
