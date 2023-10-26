import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [indexToEditItem, setIndexToEditItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const TODO_KEY = 'todos';

  const handleTaskChange = (event) => {
    // const text = event.target.value;
    // console.log(text);

    const { value } = event.target;
    // console.log(value);

    // setTask(text);
    setTask(value);
  };

  const handleSave = () => {
    // shallow copy
      const newTodos = [...todos, task];
      console.log(newTodos);

      setTodos(newTodos);
      setTask('');
      // preporuka - setTodos((prevValue) => [...prevValue, tasl]);

      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
  };

  // console.log('todos:', todos);

  const handleDelete = (index) => {
    const todosCopy = [...todos];

    // obrisali element na poziciji index i deleteCount je 1
    todosCopy.splice(index, 1);
    console.log(todosCopy);

    setTodos(todosCopy);

    localStorage.setItem(TODO_KEY, JSON.stringify(todosCopy));
  };

  const handleEdit = (taskToEdit, index) => {
    setTask(taskToEdit);
    setIsEditMode(true);
    setIndexToEditItem(index);
  };

  const handleUpdate = () => {
    // shallow copy
    const todosCopy = [...todos];

    todosCopy[indexToEditItem] = task;
    console.log(todosCopy);

    setTodos(todosCopy);
    setTask('');
    setIsEditMode(false);
    setIndexToEditItem(null);

    localStorage.setItem(TODO_KEY, JSON.stringify(todosCopy));
  };
  // console.log(indexToEditItem);

  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);
    console.log(items);

    const parsedItems = JSON.parse(items);
    console.log(parsedItems);

    setTodos(parsedItems);
  }, []);

  return (
    <div className="App">

        <h1>Todo App</h1>

        <div>
          <input type="text" value={task} onChange={(event) => handleTaskChange(event)} />
          {isEditMode ? (
            <button disabled={task.length < 5} className="update-button" onClick={() => handleUpdate()}>
                Update
            </button>
          ) : (
            <button disabled={task.length < 5} className="create-button" onClick={() => handleSave()}>
              Create
            </button>
          )}
        </div>

        <div>
          {todos.map((todo, index) => {
            // console.log(todo, index);
            return (
              <div key={index} className="todo-wrapper">
                <p>{todo}</p>
                <div className="action-wrapper">
                  <button 
                      className="edit-button"
                      onClick={() => handleEdit(todo, index)}
                  >
                      Edit
                  </button>
                  <button 
                      className="delete-button" 
                      onClick={() => handleDelete(index)}
                  >
                      Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  );
};

export default App;
