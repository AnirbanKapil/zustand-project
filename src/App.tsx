
import { Container, Typography, Box} from '@mui/material'
import './App.css'
import useRoutineStore from './store/store'
import AddRoutineForm from './components/AddRoutineForm'
import RoutineList from './components/RoutineList'


function App() {
 
  const store = useRoutineStore()


  return (
    <Container>
      <Box>
        <Typography variant='h2' component='h2' gutterBottom align='centre'>
          Routine Tracker
        </Typography>
         <AddRoutineForm />
         <RoutineList />
      </Box>
    </Container>
  )
}

export default App
