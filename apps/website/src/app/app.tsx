import {Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import ResumePage from './ResumePage'
import NavBar from './NavBar'

export function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage title="home" />}></Route>
        <Route path="/resume" element={<ResumePage title="resume" />}></Route>
      </Routes>
    </div>
  )
}

export default App
