import React, { useState } from 'react';
import './index.css'

export const TextInput = ({handleClick}) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('low');
  
  return (
    <div className='form'>
      <div>
        {/* add dropdown for priority */}
        <input className='textinput' type="text" placeholder='  Enter task...' value={value} onChange={e => setValue(e.target.value)} />
        <button className='input-button' onClick={() => {
          handleClick(value, priority);
          setValue('');
          }}>
            Add
        </button>
      </div>
    </div>
  )
}