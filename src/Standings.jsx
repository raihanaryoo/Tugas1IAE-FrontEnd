import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);
  const { leagueId } = useParams(); // Mengambil leagueId dari URL menggunakan useParams()

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/standings/${leagueId}`);
        setStandings(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          setError(`Error ${error.response.status}: ${error.response.data.error}`);
        } 
      }
    };

    fetchStandings();
  }, [leagueId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-4">Standings</h2>
      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Team</th>
                <th className="py-3 px-6 text-center">Played</th>
                <th className="py-3 px-6 text-center">W</th>
                <th className="py-3 px-6 text-center">D</th>
                <th className="py-3 px-6 text-center">L</th>
                <th className="py-3 px-6 text-center">PTS</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-4 px-6 text-left">{team.overall_league_position}</td>
                  <td className="py-4 px-6 text-left">
                    {team.team_name}
                  </td>
                  <td className="py-4 px-6 text-center">{team.overall_league_payed}</td>
                  <td className="py-4 px-6 text-center">{team.overall_league_W}</td>
                  <td className="py-4 px-6 text-center">{team.overall_league_D}</td>
                  <td className="py-4 px-6 text-center">{team.overall_league_L}</td>
                  <td className="py-4 px-6 text-center">{team.overall_league_PTS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Standings;
