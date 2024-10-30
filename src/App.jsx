import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Snickers from './Snickers'
import Skittles from './Skittles'
import KitKat from './KitKat'
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snickers" element={<Snickers />} />
          <Route path="/skittles" element={<Skittles />} />
          <Route path="/kitkat" element={<KitKat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
