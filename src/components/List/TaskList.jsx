import React from 'react';
import TaskItem from '../../sub-components/Task/TaskItem';
import './style.css';

export default function TaskList({tasks, handleDeleteClick, handleEditClick}) {
  return (
    <div className='taskForm'>
      {tasks.length === 0?
          <h2>Please enter a task above.</h2>
          : 
          <div className='items-list'>
            <ul >
              {tasks.map((task, index) => {
                return (
                <TaskItem 
                key={task.id -1}
                position={index}
                item={task} 
                handleDeleteClick={handleDeleteClick} 
                handleEditClick={handleEditClick} />
              )})}
            </ul>
          </div>}
    </div>
  )
}