import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailTeam = () => {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState(null);
  const { teamId } = useParams(); // Mengambil teamId dari URL menggunakan useParams()

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/team/${teamId}`);
        setTeam(response.data[0]);
      } catch (error) {
        setError('Error fetching team data');
      }
    };

    fetchTeam();
  }, [teamId]);

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (!team) {
    return <div className="text-gray-700">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{team.team_name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={team.team_badge} alt={team.team_name} className="mx-auto w-48 h-48 object-contain mb-4" />
          <p><span className="font-bold">Country:</span> {team.team_country}</p>
          <p><span className="font-bold">Founded:</span> {team.team_founded}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Venue</h3>
          <p><span className="font-bold">Name:</span> {team.venue.venue_name}</p>
          <p><span className="font-bold">Address:</span> {team.venue.venue_address}</p>
          <p><span className="font-bold">City:</span> {team.venue.venue_city}</p>
          <p><span className="font-bold">Capacity:</span> {team.venue.venue_capacity}</p>
          <p><span className="font-bold">Surface:</span> {team.venue.venue_surface}</p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6">Coaches</h3>
      <div>
        {team.coaches.map((coach, index) => (
          <div key={index} className="border-t border-gray-300 py-2">
            <p><span className="font-bold">Name:</span> {coach.coach_name}</p>
            <p><span className="font-bold">Country:</span> {coach.coach_country}</p>
            <p><span className="font-bold">Age:</span> {coach.coach_age}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">Players</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.players.map((player, index) => (
          <div key={index} className="border border-gray-300 p-4">
            <p><span className="font-bold">Name:</span> {player.player_name}</p>
            <p><span className="font-bold">Number:</span> {player.player_number}</p>
            <p><span className="font-bold">Age:</span> {player.player_age}</p>
            <p><span className="font-bold">Position:</span> {player.player_type}</p>
            <p><span className="font-bold">Goals:</span> {player.player_goals}</p>
            <p><span className="font-bold">Assists:</span> {player.player_assists}</p>
            {/* Add more player details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailTeam;
