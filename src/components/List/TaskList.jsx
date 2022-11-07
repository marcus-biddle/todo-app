import React from 'react';
import TaskItem from '../Task/TaskItem';
import './index.css';

export default function TaskList({tasks, handleDeleteClick, handleEditClick}) {
  return (
    <div className='taskForm'>
      {tasks.length === 0?
          <h2 className='empty-taskForm'>Please Enter A Task.</h2>
          : 
          <div>
            <ul>
              {tasks.map((task) => {
                return (
                <TaskItem 
                key={task.id} 
                item={task} 
                handleDeleteClick={handleDeleteClick} 
                handleEditClick={handleEditClick} />
              )})}
            </ul>
          </div>}
    </div>
  )
}