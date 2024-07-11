import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import View from './component/View';
import Add from './component/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/view" element={<View />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
