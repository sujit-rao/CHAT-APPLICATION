
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Home from './components/home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className=' p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
