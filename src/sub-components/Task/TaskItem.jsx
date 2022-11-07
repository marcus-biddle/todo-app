import React from 'react'
import './index.css';

export default function TaskItem ({item, handleDeleteClick, handleEditClick}) {
  return (
    <li className='items' key={item.id}>
        <button className='delete-button' onClick={() => handleDeleteClick(item.id)}>X</button>
        <span className='item-name'>{item.task}</span>
        <button className='edit-button' onClick={() => handleEditClick(item)}>Edit</button>
    </li>
  )
}