import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography'

function App() {
  const [count, setCount] = useState(0)
  const name = 'shola and tunde'

  return (
    <>
      <div className="App">
        <Typography variant="h1" color="initial"><h1>{name}</h1></Typography>
      </div>
    </>
  )
}

export default App
