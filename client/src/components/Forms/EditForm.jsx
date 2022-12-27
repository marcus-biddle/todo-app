import React from 'react'
import { useState } from 'react';

function EditForm({activeTask, setIsEditing, handleUpdateClick}) {
  const [value, setValue] = useState();

  const handleEditChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className='form'>
        <input className='input' type="text" placeholder='Edit task or cancel action' value={value} onChange={(e) =>  handleEditChange(e)}  />
        <div>
          <button id='button' onClick={(e) => {
              handleUpdateClick(value, activeTask.id) 
              setIsEditing(false);}}>
              Update
          </button>
          <button id='button' onClick={() => setIsEditing(false)}>
              Cancel
          </button>
        </div>
    </div>
  )
}

export default EditForm