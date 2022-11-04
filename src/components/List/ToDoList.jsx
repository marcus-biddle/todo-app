import React from 'react';
import './index.css';

function ToDoList({tasks}) {
  console.log(tasks);
  return (
    <div className='todolist'>
      {/* <div className='table-title'>
        <h2>
          Tasks to be completed...
        </h2>
      </div> */}
      <div className='list'>
      {tasks.length === 0?
          <h2 className='empty'>No available tasks.</h2>
          :
      <table className='table'>
      <tr className='table-headers'>
                <th>Priority</th>
                <th>Task</th>
                <th>Completed</th>
              </tr>
        
          {tasks.map((task, index) => {
          return (
              <tr className={index % 2 === 0? 'even' : 'odd' } key={index}>
                <td>{task.priority}</td>
                <td>{task.task}</td>
                <td>Unknown</td>
                 {/*make button for complete or not  */}
              </tr>
          )})}
          </table>}
      </div>
    </div>
  )
}

export default ToDoList