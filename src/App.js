import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './contents/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<about />} />
        </Routes>


        
      </div>
    </Router>
    
  );
}

export default App;
