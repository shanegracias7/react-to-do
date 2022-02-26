import React from 'react'

export default function ToDo({toDoItem, toggleToDo}) {
    function handleToggle(){
        toggleToDo(toDoItem.id)  
    }
  return (
    <div>
        <input type = "checkbox" checked = {toDoItem.checked} onChange={handleToggle}/>
        {toDoItem.value}
    </div>
  )
}
