import React from 'react'
import { useState } from 'react'

export const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

  return (
    <div>
        <button onClick={handleClick()}>Priority</button>
    </div>
  )
}
