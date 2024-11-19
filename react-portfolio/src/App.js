import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Education from './components/Education/Education.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/experience" Component={Experience}/>
          <Route path="/education" Component={Education}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
