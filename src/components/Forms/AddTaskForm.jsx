import React, { useEffect, useState } from 'react';
import './index.css'

export default function AddTaskForm ({handleAddTaskClick}) {
  const [value, setValue] = useState('');
  const [disable, setDisable] = useState(true);

  const handleDisabled = (value) => {
    if (value.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }
  
  return (
    <div className='form'>
      <div >
        <input className='input' type="text" placeholder='Enter task...' value={value} onChange={e => {
          setValue(e.target.value);
          handleDisabled(e.target.value);
          }} />
      </div>
      <div >
        <button id="button" disabled={disable} onClick={() => {
          handleAddTaskClick(value);
          setValue('');
          setDisable(true);
          }}>
            Add Task
        </button>
      </div>
    </div>
  )
}