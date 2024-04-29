import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

const App = () => {
  return (
    <div> 
  <> 
  <NoteState>
          <BrowserRouter>
        <Navbar/>
        <h1>iNotebook</h1>
        <Routes>
            <Route exact path='/home' element={<Home />} /> 
            <Route exact path='/about' element={<About />} /> 
            </Routes>
      </BrowserRouter> 
      </NoteState>
      </>
    </div>
  )
}

export default App
