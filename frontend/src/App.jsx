import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './pages/Home'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
        
      </BrowserRouter>
    </div>
  )
} 

export default App
