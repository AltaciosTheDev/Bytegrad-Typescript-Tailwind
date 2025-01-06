

export default function DeleteButton({handleDeleteTodo, id}) {
  return (
    <button 
    onClick={(e) => {
      e.stopPropagation()
      handleDeleteTodo(id)
    }}
    >
    ❌</button>
  )
}
