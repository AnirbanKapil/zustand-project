import { Box, Button, Grid, Paper, Typography } from '@mui/material'

import useRoutineStore from '../store/store'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'


function RoutineList() {

  const {routines , removeRoutine} = useRoutineStore()

  const today = new Date().toISOString().split("T")[0]

  return (
    <div>
      <Box sx={{display: "flex" , flexDirection : "column", gap : 3, mt : 4}}>
       {routines.map((routine)=> (
        <Paper key={routine.id} elevation={2} sx={{p : 2}}>
           <Grid container alignItems="center">
              <Grid xs={12} sm={6}>
                <Typography variant="h6">{routine.name}</Typography>
                <Typography variant="body2" color="textSecondary">{routine.frequency}</Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                 <Box sx={{display : "flex", justifyContent : "flex-end", gap : 1}}>
                    <Button variant="outlined" color={routine.completedDates.includes(today) ? "success" : "primary"} startIcon={<CheckCircleIcon />}>
                      {routine.completedDates.includes(today) ? "Completed" : "Mark Complete"}
                    </Button>
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={()=>removeRoutine(routine.id)}>
                      Remove
                    </Button>
                 </Box>
              </Grid>
           </Grid>
        </Paper>
       ))}
      </Box>
    </div>
  )
}

export default RoutineList