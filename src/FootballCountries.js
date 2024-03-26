import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const FootballCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:2000');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching football data:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">Football Countries</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {countries.map((country, index) => (
            <Link key={index} to={`/leagues/${country.country_id}`} className="group flex items-center">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 mr-4">
                <img
                  src={country.country_logo}
                  alt={country.country_name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">{country.country_name}</h3>
                <p className="text-sm text-gray-500">{country.country_description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballCountries;
