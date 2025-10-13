interface Todo {
  task: string;
  done: boolean;
}

export default function JsonTodoItem({ todo }: { todo: Todo }) {
  return (
    <li>
      {todo.task} - {todo.done ? "Done" : "Not Done"}
    </li>
  );
}
