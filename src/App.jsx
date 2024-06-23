// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FootballLeagues from './FootballLeagues';
import Standings from './Standings';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FootballLeagues />} />
          <Route path="/standings/:leagueId" element={<Standings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
