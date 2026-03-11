import { useState } from "react";

function App() {

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const [toDos, settoDos] = useState([]);

  return (
    <div>

      <h1>ToDo</h1>

      <h2>NewTask</h2>

      <input
        type="text"
        value={task.title}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value
          })
        }
      />

      <br />

      <textarea
        value={task.description}
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value
          })
        }
      ></textarea>

      <br />

      <button
        onClick={() => {
          settoDos([...toDos, task]);
          setTask({
            title: "",
            description: ""
          });
        }}
      >
        Add
      </button>

      <br />

      <h2>Todo List:</h2>

{toDos.map((todo, index) => (
  <div key={index}>
    <p>{todo.title}</p>
    <p>{todo.description}</p>

    <button
      onClick={() =>
        settoDos(
          toDos.filter((todo, i) => i !== index)
        )
      }
    >
      Done
    </button>

  </div>
))}

    </div>
  );
}

export default App;