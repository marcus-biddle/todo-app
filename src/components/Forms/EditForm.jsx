import React from 'react'

function EditForm({activeTask, handleEditChange, setIsEditing, handleUpdateClick}) {
  return (
    <div className='form'>
      <div>
        <input type="text" placeholder='Edit task or cancel action' value={activeTask.task} onChange={(e) =>  handleEditChange(e)}  />
        <button onClick={(e) => {
            handleUpdateClick(activeTask.id) 
            setIsEditing(false);}}>
            Update
        </button>
        <button onClick={() => setIsEditing(false)}>
            Cancel
        </button>
      </div>
    </div>
  )
}

export default EditForm