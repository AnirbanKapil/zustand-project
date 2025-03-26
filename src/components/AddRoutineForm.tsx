import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import useRoutineStore from '../store/store';

function AddRoutineForm() {
    const [name,setName] = useState("");
    const [frequency,setFrequency] = useState<"daily" | "weekly">("daily")
    
    const {routines,addRoutine} = useRoutineStore();
    
    console.log(routines)

    const handleSubmit = (e : React.FormEvent) => {
         e.preventDefault();
         if(name.trim()){
          addRoutine(name,frequency);

         }
    }
    
    return (
    <form onSubmit={handleSubmit}>
     <Box sx={{
        display : "flex",
        flexDirection : "column",
        gap : 2
     }}>
       <TextField  
       label="Routine"
       value={name}
       onChange={(e)=> setName(e.target.value)}
       placeholder='Enter your Routine'
       fullWidth
       />
       <FormControl fullWidth>
       <InputLabel>Frequency</InputLabel>
       <Select
       value={frequency}
       label="Frequency"
       onChange={(e)=> setFrequency(e.target.value as "weekly" | "daily")}
       >
       <MenuItem value="daily">Daily</MenuItem>
       <MenuItem value="weekly">Weekly</MenuItem>
       
       </Select>
       </FormControl>
       <Button type='submit' variant='contained' color='primary'>
        Add Routine
       </Button>
     </Box>
    </form>
  )
}

export default AddRoutineForm