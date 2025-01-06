type DeleteButtonProps = {
  handleDeleteTodo: (id: number) => void,
  id: number
}

export default function DeleteButton({handleDeleteTodo, id}: DeleteButtonProps) {
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
