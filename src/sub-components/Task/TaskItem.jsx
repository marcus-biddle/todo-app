import React from 'react'
import './style.css';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai'

export default function TaskItem ({className, position, item, handleDeleteClick, handleEditClick}) {

  return (
    <li className={className} key={item.id}>
      <div className='info'>
        <div className='list-count'>{position +1}</div>
        <span className='item-name'>{item.task}</span>
      </div>
      <div className='icons'>
        <button className='icon-bg' onClick={() => handleDeleteClick(item.id)}>
        <MdDelete className='icon-button' />
        </button>
        <button className='icon-bg' onClick={() => handleEditClick(item)}>
          <AiFillEdit className='icon-button'/>
        </button>
        </div>
    </li>
  )
}