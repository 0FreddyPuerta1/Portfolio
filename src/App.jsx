import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar/>
      <h1>This Is My Portfolio</h1>
    </div>
  )
}

export default App
