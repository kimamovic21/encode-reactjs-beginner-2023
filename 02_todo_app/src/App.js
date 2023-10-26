import React, { useState } from "react";
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTaskChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    const { value } = event.target;
    // console.log(value);

    setTask(value);
  };

  const handleSave = () => {
    // shallow copy
      const newTodos = [...todos, task];
      console.log(newTodos);

      setTodos(newTodos);
      setTask('');
      // setTodos((prevValue) => [...prevValue, tasl]);
  };

  // console.log('todos:', todos);

  const handleDelete = (index) => {
    const todosCopy = [...todos];

    // obrisali element na poziciji index i deleteCount je 1
    todosCopy.splice(index, 1);
    console.log(todosCopy);

    setTodos(todosCopy);
  };

  return (
    <div className="App">
        <div>
          <input 
              type="text" 
              value={task}
              onChange={(event) => handleTaskChange(event)} 
          />
          <button 
              disabled={task.length < 5}
              className="create-button"
              onClick={() => {
                handleSave();
              }}
          >
            Create
          </button>
        </div>
        <div>
          {todos.map((todo, index) => {
            // console.log(todo, index);
            return (
              <div key={index} className="todo-wrapper">
                <p>{todo}</p>
                <button className="delete-button" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            )
          })}
        </div>
    </div>
  );
};

export default App;
