import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({toDoList}) {
  return (
    toDoList.map((toDoItem) => <ToDo key = {toDoItem.id} toDoItem = {toDoItem}/>
     )
  )
}
