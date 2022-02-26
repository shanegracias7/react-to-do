import React from 'react'

export default function ToDo({toDoItem}) {
  return (
    <div>
        <input type = "checkbox" checked = {toDoItem.checked}/>
        {toDoItem.value}
    </div>
  )
}
