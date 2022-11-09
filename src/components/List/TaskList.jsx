import React from 'react';
import TaskItem from '../../sub-components/Task/TaskItem';
import './style.css';

export default function TaskList({addedTask, tasks, handleDeleteClick, handleEditClick}) {

  return (
    <div className='taskForm'>
      {tasks.length === 0?
          <h2>Please enter a task above.</h2>
          : 
          <div className='items-list'>
            <ul >
              {tasks.map((task, index) => {
                return (
                  ((task === tasks[tasks.length - 1]) && addedTask)?
                  <TaskItem
                  className='last-item'
                  tasks={tasks}
                  key={task.id -1}
                  position={index}
                  item={task} 
                  handleDeleteClick={handleDeleteClick} 
                  handleEditClick={handleEditClick} />
                    :
                  <TaskItem
                  className='items'
                  tasks={tasks}
                  key={task.id -1}
                  position={index}
                  item={task} 
                  handleDeleteClick={handleDeleteClick} 
                  handleEditClick={handleEditClick} />
                )
              })}
            </ul>
          </div>}
    </div>
  )
}