import React from 'react';

const AddTodo = (props) => {
  const { task, handleTaskChange, isEditMode, handleUpdate, handleSave } = props;

  return (
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
  );
};

export default AddTodo;