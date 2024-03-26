// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FootballLeagues from './FootballLeagues';
import FootballCountries from './FootballCountries';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FootballCountries />} />
          <Route path="/leagues/:country_id" element={<FootballLeagues />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
