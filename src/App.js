import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Resume from './contents/Resume'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        </Routes>



      </div>
    </Router>
    
  );
}

export default App;
