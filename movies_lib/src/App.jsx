import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState([])

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
