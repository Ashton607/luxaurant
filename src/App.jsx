import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </Router>
  )
}

export default App
