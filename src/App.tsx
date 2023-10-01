import './App.css'

import { RouterProvider as Router } from 'react-router-dom';
import router from './router'
import { useState } from 'react'
import Loader from './components/PageLoader';

function App() {
  const [loading, setloading] = useState(true)

  const timeout = setTimeout(() => {
    setloading(false)
    clearTimeout(timeout)
  }, 2000);

  return (
    <>
      {loading ?
        <Loader /> :
        <Router router={router} />
      }
    </>
  )
}

export default App
