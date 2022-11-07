import React from 'react'

export default function TaskItem ({item, handleDeleteClick, handleEditClick}) {
  return (
    <li key={item.id}>
        <button onClick={() => handleDeleteClick(item.id)}>X</button>
        <div>{item.task}</div>
        <button onClick={() => handleEditClick(item)}>Edit</button>
    </li>
  )
}