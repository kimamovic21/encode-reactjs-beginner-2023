import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

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
        <Header />
        <AddTodo 
            task={task} 
            handleTaskChange={handleTaskChange}
            isEditMode={isEditMode}
            handleUpdate={handleUpdate}
            handleSave={handleSave}
        />
        <Todos 
            todos={todos}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
            handleDelete={handleDelete}    
        />
    </div>
  );
};

export default App;
