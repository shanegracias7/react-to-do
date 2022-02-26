import React,{ useState , useRef , useEffect} from "react";
import ToDoList from "./ToDoList";
import  { v4 as uuidv4 } from 'uuid'

function App() {
  const [storedToDos, setToDos] = useState([])
  const toDoRef = useRef()
  const LocalStorageKey = 'todo.local'

  // loading data from local storage
  useEffect(()=>{
    const localStorageToDo = JSON.parse(localStorage.getItem(LocalStorageKey)) 
    if(localStorageToDo) setToDos(localStorageToDo)
  },[])

  // storing data in local storage
  useEffect(()=>{
    localStorage.setItem(LocalStorageKey,JSON.stringify(storedToDos))
  },[storedToDos])

  //adding new to do items
  function handleAdd(e){
    const value = toDoRef.current.value
    if(value === '') return
    setToDos((prevToDo) => {
      return [...prevToDo,{id:uuidv4(),value:value,checked:true}]
    })
    toDoRef.current.value=null
    
  }

  //handling toggle in checkbox
  function toogleToDo(id){
    const newToDos = [...storedToDos]
    const toDo = newToDos.find(toDo => toDo.id === id)
    toDo.checked = !toDo.checked
    setToDos(newToDos)
  }

  return (
    <>
    <input type="text" ref={toDoRef}/>
    <button onClick={handleAdd}>ADD</button>
    <button>CLEAR</button>
    <ToDoList toDoList = {storedToDos} toggleToDo = {toogleToDo} />
    </>
    
  ) 
}

export default App;
  