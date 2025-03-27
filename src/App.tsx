
import { Container, Typography, Box} from '@mui/material'


import AddRoutineForm from './components/AddRoutineForm'
import RoutineList from './components/RoutineList'


function App() {
 
  return (
    <Container maxWidth="sm"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign : "center"
    }}>
      <Box sx={{ 
      textAlign: "center", 
      width: "100%" 
    }}>
        <Typography variant='h2' component='h2' gutterBottom >
          Routine Tracker
        </Typography>
         <AddRoutineForm />
         <RoutineList />
      </Box>
    </Container>
  )
}

export default App
