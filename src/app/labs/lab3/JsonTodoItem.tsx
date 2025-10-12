export default function JsonTodoItem({ todo }) {
  return (
    <li>
      {todo.task} - {todo.done ? "Done" : "Not Done"}
    </li>
  );
}
