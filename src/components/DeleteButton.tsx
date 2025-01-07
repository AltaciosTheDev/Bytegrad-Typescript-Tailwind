type DeleteButtonProps = {
  onDeleteTodo: (id: number) => void;
  id: number;
};

export default function DeleteButton({ onDeleteTodo, id }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
