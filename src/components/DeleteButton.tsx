

export default function DeleteButton({setTodos, id}) {
  return (
    <button 
    onClick={(e) => {
      e.stopPropagation()
      setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id != id))
    }}
    >
    ❌</button>
  )
}
