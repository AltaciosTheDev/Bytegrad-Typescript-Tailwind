import DeleteButton from "./DeleteButton";
import {Todo} from "./App"

type TodoListProps = {
  todos:Todo[],
  handleToggleTodo: (id: number) => void,
  handleDeleteTodo: (id: number) => void
}

export default function TodoList({todos, handleToggleTodo, handleDeleteTodo} : TodoListProps) {
  return (
    <ul>
      {
        todos.length === 0 && <li className="h-full flex justify-center items-center font-semibold">Start by adding a todo!</li>
      }

      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-black/[8%]"
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span
              className={`${
                todo.isCompleted ? "line-through text-[#ccc]" : ""
              }`}
            >
              {todo.text}
            </span>
            <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo}/>
          </li>
        );
      })}
    </ul>
  );
}
