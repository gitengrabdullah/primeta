import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Homepage'
import StepsSection from './components/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
<StepsSection/>

    </>
  )
}

export default App
