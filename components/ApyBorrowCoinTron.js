import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApyRate = () => {
  const [apyRate, setApyRate] = useState(null);
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad de los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get('http://localhost/crypto-dash/public/getApyBorrowCoinTron/jUSDT');
        const response = await axios.get('https://crypto-dash-weld.vercel.app/getApyBorrowCoinTron/jUSDT');
        setApyRate(response.data.data);
        setVisible(false); // Ocultar los datos antes de actualizar
        setTimeout(() => {
          setVisible(true); // Mostrar los datos actualizados con un efecto de fade in después de 500ms
        }, 500);
      } catch (error) {
        console.error('Error fetching loan:', error);
      }
    };

    // Fetch data initially and then every 10 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (apyRate) {
  return (
    <>
      {visible ? (
          <span className={`animate__animated animate__fadeIn fadeIn font-number`}>{apyRate.borrowRate}%</span>
      ) : (
          <span className={`animate__animated animate__fadeOut fadeOut`}></span>
      )}
    </>
  );
} else {
  return <div>Updating...</div>;
}

};

export default ApyRate;