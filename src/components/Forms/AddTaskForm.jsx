import React, { useState } from 'react';
import './index.css'

export default function AddTaskForm ({handleAddTaskClick}) {
  const [value, setValue] = useState('');
  
  return (
    <div className='form'>
      <div>
        <input className='AddTaskForm' type="text" placeholder='  Enter task...' value={value} onChange={e => setValue(e.target.value)} />
        <button className='input-button' onClick={() => {
          handleAddTaskClick(value);
          setValue('');
          }}>
            Add
        </button>
      </div>
    </div>
  )
}