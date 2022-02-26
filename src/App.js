import React,{ useState , useRef , useEffect} from "react";
import ToDoList from "./ToDoList";
import  { v4 as uuidv4 } from 'uuid'

function App() {
  const [storedToDos, setToDos] = useState([])
  const toDoRef = useRef()
  const LocalStorageKey = 'todo.local'

  useEffect(()=>{
    const localStorageToDo = JSON.parse(localStorage.getItem(LocalStorageKey)) 
    if(localStorageToDo) setToDos(localStorageToDo)
  },[])
  useEffect(()=>{
    localStorage.setItem(LocalStorageKey,JSON.stringify(storedToDos))
  },[storedToDos])

  function handleAdd(e){
    const value = toDoRef.current.value
    if(value === '') return
    setToDos((prevToDo) => {
      return [...prevToDo,{id:uuidv4(),value:value,checked:false}]
    })
    toDoRef.current.value=null
    
  }
  return (
    <>
    <input type="text" ref={toDoRef}/>
    <button onClick={handleAdd}>ADD</button>
    <button>CLEAR</button>
    <ToDoList toDoList = {storedToDos}/>
    </>
    
  ) 
}

export default App;
  