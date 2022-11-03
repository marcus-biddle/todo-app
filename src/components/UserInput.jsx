import React, { useState } from 'react';

function UserInput() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState([{id: 0, task: "Test"}]);

  const handleClick = () => {
    const id = task.length +1;
    setTask((prev) => [
      ...prev, {id: id, task: value}
    ]);
    setValue('')
  };

  console.log(task)

  return (
    <div>
      <span>Enter value</span>
      <input type="text" placeholder='Enter task' onChange={e => setValue(e.target.value)} />
      <button onClick={() => handleClick()}>Add</button>
    </div>
  )
}

export default UserInput