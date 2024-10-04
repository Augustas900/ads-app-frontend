import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/ads');
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div>
      <h1>Advertisements</h1>
      <ul>
        {ads.map(ad => (
          <li key={ad.id}>{ad.title}: {ad.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdsPage;
