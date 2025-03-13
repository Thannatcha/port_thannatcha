import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skill from './contents/Skill';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>



      </div>
      
    </Router>
    
  );
}

export default App;
