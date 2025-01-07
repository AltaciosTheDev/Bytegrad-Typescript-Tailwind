import { createContext, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProps = {
  children: React.ReactNode
}

type TTodosContext = {
  todos:Todo[],
  totalNumberOfTodos:number,
  numberOfCompletedTodos:number,
  handleAddTodo: (todoText: string) => void,
  handleToggleTodo: (id: number) => void,
  handleDeleteTodo: (id: number) => void
} 
//1)create Context
export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodosContextProvider({ children }: TodosContextProps) {

  //state
  const [todos, setTodos] = useState<Todo[]>([]);

  //derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  //event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: prev.length + 1, text: todoText, isCompleted: false },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id == id) {
          return { ...prevTodo, isCompleted: !prevTodo.isCompleted };
        } else {
          return prevTodo;
        }
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id != id));
  };

  //2)return context with value
  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
