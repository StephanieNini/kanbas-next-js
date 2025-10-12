const todos = [
  { id: 1, task: "Finish Lab 3 assignment", done: true },
  { id: 2, task: "Review JavaScript destructuring", done: true },
  { id: 3, task: "Implement a simple ToDo List", done: false },
  { id: 4, task: "Submit lab to the course portal", done: false },
];

export default function JsonTodo() {
  return (
    <div id="wd-json-todo">
      <h3>JSON ToDo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.done ? "Done" : "Not Done"}
          </li>
        ))}
      </ul>
    </div>
  );
}
