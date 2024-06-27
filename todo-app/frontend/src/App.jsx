import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Login } from './components/Login';
import { Signin } from './components/Signin';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
