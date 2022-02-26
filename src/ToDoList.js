import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList , toggleToDo}) {
  return (
    toDoList.map((toDoItem) => {
        return <ToDo key = {toDoItem.id} toDoItem = {toDoItem} toggleToDo ={toggleToDo}/>
    })
  )
}
