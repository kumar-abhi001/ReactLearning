import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './Components/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>OTP UI</h1>
      <Otp />
    </>
  )
}

export default App
