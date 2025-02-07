
import './App.css';
import About from './components/About';
import Footer from './components/Footer';

import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const [alt,changeAlt]=useState();
  const alt1=( txtn,type)=>{
    changeAlt({
      msg:txtn,
      stt:type
    })
    setTimeout(() => {
      changeAlt(null)
    }, 1500);
    
  }
  return (
    <>
    <NoteState>
    {/* <Router future={{ v7_startTransition: true,v7_relativeSplatPath: true }}> */}
      <Router >
      <Navbar/>
      <Alert nf={alt}/>
      <div className="container">
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login alt1={alt1}/>} />
          <Route path="/signup" element={<Signup alt1={alt1}/>} />
          <Route path="/" element={
            <>
            
            <Home alt1={alt1}/>
            
            </>
            } />
            
        </Routes>
        </div>
        <Footer/>
      </Router>
      
      
      
      </NoteState>
    </>
    
    
  );
}

export default App;
