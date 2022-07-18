import { Checkbox, FormControlLabel, Input, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function ToDo({toDoItem, toggleToDo}) {
    function handleToggle(){
        toggleToDo(toDoItem.id)  
    }
  return (
    <Paper>
      <Box display='flex' sx={{alignItems:'center', margin:2}}>
        <FormControlLabel onChange={handleToggle} control={<Checkbox checked = {toDoItem.checked}defaultChecked />}  />
        <Typography variant='h6'>{toDoItem.value}</Typography>
        
    </Box>
    </Paper>
    
  )
}
