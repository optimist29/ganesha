import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GaneshaPage from './components/GaneshaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ganesha/:id" element={<GaneshaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;