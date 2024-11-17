import { useState } from 'react'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import './App.css'
// import AuthGuard from './authguard/AuthGuard'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
function App() {


  return (
<>
<div>hi</div>
<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Navigate to="/login"/>}/>
    <Route path ="/login" element={<Login/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path = "/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
</>
  )
}

export default App
