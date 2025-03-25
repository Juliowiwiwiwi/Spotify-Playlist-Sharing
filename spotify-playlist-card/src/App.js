import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Playlists from './Pages/Playlists';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/playlists" className="nav-link">My Playlists</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;