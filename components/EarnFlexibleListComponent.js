import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css'; // Import animate.css

const EarnFlexibleList = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad de los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/crypto-dash/public/earnFlexibleList');
        console.log(response.data.data);
        setData(response.data.data);
        setVisible(false); 
        setTimeout(() => {
          setVisible(true); 
        }, 500);
      } catch (error) {
        console.error('Error fetching loan:', error);
      }
    };

    // Fetch data initially and then every 10 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 100000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    { data }%
    </>
  );
};

export default EarnFlexibleList;
