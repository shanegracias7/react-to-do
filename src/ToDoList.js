import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList , toogleToDo}) {
  return (
    toDoList.map((toDoItem) => {
        return <ToDo key = {toDoItem.id} toDoItem = {toDoItem} toggleToDo ={toogleToDo}/>
    })
  )
}
