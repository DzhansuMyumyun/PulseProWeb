import { useState } from 'react'
import Mainnav from './components/Main-Nav'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigations from './components/Nav-Examples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Mainnav/>
      <Navigations/>
    </div>
  )
}

export default App
