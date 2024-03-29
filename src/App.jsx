// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FootballLeagues from './FootballLeagues';
import FootballCountries from './FootballCountries';
import Standings from './Standings';
import DetailTeam from './DetailTeam';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FootballCountries />} />
          <Route path="/leagues/:country_id" element={<FootballLeagues />} />
          <Route path="/standings/:leagueId" element={<Standings />} />
          <Route path="/team/:teamId" element={<DetailTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
