import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FootballLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  const { country_id } = useParams(); // Mengambil country_id dari URL menggunakan useParams()

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/leagues/${country_id}`);
        setLeagues(response.data);
      } catch (error) {
        console.error('Error fetching football leagues:', error);
      }
    };
    fetchLeagues();
  }, [country_id]); // Memastikan pengambilan data liga dilakukan setiap kali country_id berubah

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">Football Leagues</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {leagues.map((league, index) => (
            <div key={index} className="group flex items-center">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 mr-4">
                <img
                  src={league.league_logo}
                  alt={league.league_name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{league.league_name}</h3>
                <p className="text-sm text-gray-500">{league.league_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballLeagues;
