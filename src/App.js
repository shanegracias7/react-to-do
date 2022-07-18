import React,{ useState , useRef , useEffect} from "react";
import ToDoList from "./ToDoList";
import  { v4 as uuidv4 } from 'uuid'
import { Input,Button, Box, Paper } from "@mui/material";

function App() {
  const [storedToDos, setToDos] = useState([])
  const [text, setText] = useState('')
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
  
    if(text === '') return
    setToDos((prevToDo) => {
      return [...prevToDo,{id:uuidv4(),value:text,checked:false}]
    })
    setText('')

    
  }

  //handling toggle in checkbox
  function toggleToDo(id){
    const newToDos = [...storedToDos]
    const toDo = newToDos.find(toDo => toDo.id === id)
    toDo.checked = !toDo.checked
    setToDos(newToDos)
  }

  function handleCLEAR(){
    const completedToDoList = storedToDos.filter(todo => todo.checked === false)
    //console.log(completedToDoList)
    setToDos(completedToDoList)
  }

  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleAdd(event)
      }
    }
    
  return (
    <div>
    <Paper elevation={3} >
      <Box display='flex' sx={{alignItems:'center', padding:2,justifyContent:"center"}}>
        <Input type="text" placeholder="Enter new task..." value={text} onChange={event => setText(event.target.value)} onKeyDown={handleKeyDown}/>
        <Button variant="contained" sx={{alignItems:'center', margin:2}} onClick={handleAdd} >ADD</Button>
        <Button variant="contained" color="error" onClick={handleCLEAR}>CLEAR</Button>
      </Box>
    </Paper>  
    
    <ToDoList toDoList = {storedToDos} toggleToDo = {toggleToDo} />
    </div>
    
  ) 
}

export default App;
  