import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import BaseLayout from './layouts/baseLayout'
import Profile from './Pages/Profile/Profile'
function App() {

  return (
    <BaseLayout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/:username' element={<Profile/>}/>
      </Routes>

    </BaseLayout>
    
  )
}

export default App
