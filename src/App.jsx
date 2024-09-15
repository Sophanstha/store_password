import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='text-pink-950'>password</h1> */}
    <Navbar />
    <Manager />
    </>
  )
}

export default App
