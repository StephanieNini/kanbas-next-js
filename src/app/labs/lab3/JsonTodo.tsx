const todos = [
  { "title": "Buy milk",          "status": "CANCELED",     "done": true   },
  { "title": "Pickup the kids",   "status": "IN PROGRESS",  "done": false  },
  { "title": "Walk the dog",      "status": "DEFERRED",     "done": false  }
]


export default function JsonTodo() {
  return (
    <div id="wd-json-todo">
      <h3>JSON ToDo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            {todo.title} - {todo.status} - {todo.done ? "Done" : "Not Done"}
          </li>
        ))}
      </ul><hr/>
    </div>
  );
}
