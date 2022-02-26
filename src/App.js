import React,{ useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [storedToDos, setTodos] = useState([{id:1,value:'todo1',complete:true},{id:2,value:'todo2',complete:true}])
  return (
    <>
    <input type="text"/>
    <button>ADD</button>
    <button>CLEAR</button>
    <ToDoList toDoList = {storedToDos}/>
    </>
    
  ) 
}

export default App;
  