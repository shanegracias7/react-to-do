import React from 'react'

export default function ToDo({toDoItem, toogleToDo}) {
    function handleToggle(){
        toogleToDo(toDoItem.id)  
    }
  return (
    <div>
        <input type = "checkbox" checked = {toDoItem.checked} onChange={handleToggle}/>
        {toDoItem.value}
    </div>
  )
}
