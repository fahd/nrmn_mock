import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Question from './pages/Question/Question'
import Profile from './pages/Profile/Profile'
import Conversations from './pages/Conversations/Conversations'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question/:id" element={<Question />}></Route>
        <Route path="/user/:id" element={<Profile />}></Route>
        <Route path="/messaging/" element={<Conversations />}></Route>
      </Routes>
    </>
  )
}

export default App
