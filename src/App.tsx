import './App.css'

import { RouterProvider as Router } from 'react-router-dom';
import router from './router'

function App() {
  return (
    <Router router={router} />
  )
}

export default App
