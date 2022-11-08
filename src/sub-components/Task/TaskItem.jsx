import React from 'react'
import './index.css';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai'

export default function TaskItem ({item, handleDeleteClick, handleEditClick}) {
  return (
    <li className='items' key={item.id}>
        <button className='delete-button' onClick={() => handleDeleteClick(item.id)}>
        <MdDelete className='trash-icon' />
        </button>
        <span className='item-name'>{item.task}</span>
        <button className='edit-button' onClick={() => handleEditClick(item)}>
          <AiFillEdit className='edit-icon'/>
        </button>
    </li>
  )
}