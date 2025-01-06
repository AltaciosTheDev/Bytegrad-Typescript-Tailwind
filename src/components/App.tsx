import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (todoText) => {
    if(todos.length >= 3) {
      alert("Log in to add more than 3 todos")
    }
    else{
      setTodos(prev => [
        ...prev, {id:prev.length + 1, text: todoText, isCompleted: false}
        
      ])
    }
  }

  const handleToggleTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => {
      if(prevTodo.id == id){
        return {...prevTodo, isCompleted: !prevTodo.isCompleted}
      }
      else{
        return prevTodo
      }
    }))
  }

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id != id))
  }

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading/>
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos}/>
        <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>
        <Sidebar todos={todos} handleAddTodo={handleAddTodo}/>
      </main>
    <Footer/>
    </div>
  );
}

export default App;
