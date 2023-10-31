import React from 'react';

const Todos = (props) => {
  const { todos, handleEdit, handleComplete, handleDelete } = props;

  return (
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
  );
};

export default Todos;