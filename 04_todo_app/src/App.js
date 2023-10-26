import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [indexToEditItem, setIndexToEditItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const TODO_KEY = 'todos';

  const handleTaskChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setTask(value);
  };


  const handleSave = () => {
    // shallow copy
      const newTodos = [...todos, { name: task, isCompleted: false }];
      console.log(newTodos);

      setTodos(newTodos);
      setTask('');
      // preporuka - setTodos((prevValue) => [...prevValue, tasl]);

      localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
      sessionStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
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
    setTask(taskToEdit.name);
    setIsEditMode(true);
    setIndexToEditItem(index);
  };


  const handleUpdate = () => {
    // shallow copy
    const todosCopy = [...todos];

    // replace item at specific index
    todosCopy[indexToEditItem].name = task;
    console.log(todosCopy);

    // reset to initial state
    setTodos(todosCopy);
    setTask('');
    setIsEditMode(false);
    setIndexToEditItem(null);

    localStorage.setItem(TODO_KEY, JSON.stringify(todosCopy));
  };
  // console.log(indexToEditItem);


  const handleComplete = (index) => {
    const todosCopy = [...todos];
    todosCopy[index].isCompleted = true;

    setTodos(todosCopy);

    localStorage.setItem(TODO_KEY, JSON.stringify(todosCopy));
  };


  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);
    console.log(items);

    if (items) {
      const parsedItems = JSON.parse(items);
      console.log(parsedItems);

      if (parsedItems?.length) {
        setTodos(parsedItems);
      }
    }
  }, []);


  return (
    <div className="App">

        <h1>Todo App</h1>

        <div>
          <input 
              type="text" 
              value={task}
              onChange={(event) => handleTaskChange(event)} 
          />
            <button 
                disabled={task.length < 5} 
                className="create-button" 
                onClick={isEditMode ? handleUpdate : handleSave}
            >
                {isEditMode ? 'Update' : 'Create'}
            </button>
        </div>

        <div>
          {todos.map((todo, index) => {
            console.log(todo, index);
            return (
              <div key={index} className="todo-wrapper">
                <p className={`${todo.isCompleted ? 'completed' : ''}`}>{todo.name}</p>
                <div className="action-wrapper">
                  <button className="edit-button" onClick={() => handleEdit(todo, index)} disabled={todo.isCompleted}>
                      Edit
                  </button>
                  <button className="complete-button" onClick={() => handleComplete(index)} disabled={todo.isCompleted}>
                      Complete
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(index)}>
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
