import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Question from './pages/Question/Question'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question/:id" element={<Question />}></Route>
        <Route path="/user/:id" element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App
