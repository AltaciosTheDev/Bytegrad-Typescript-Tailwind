import React, { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({todos, setTodos}) {
  const [todoText, setTodoText] = useState('')

  const handleChange = (e)=> {
    setTodoText(e.target.value)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos(prev => [
          ...prev, {id:prev.length + 1, text: todoText, isCompleted: false}
          
        ])
        setTodoText("")
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add Todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
        value={todoText}
        onChange={handleChange}
      />
      <Button>Add to list</Button>
    </form>
  );
}
