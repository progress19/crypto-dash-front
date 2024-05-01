import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBitcoin } from 'react-icons/fa';

const BitcoinPrice = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad del precio actualizado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crypto-dash-weld.vercel.app/getBitcoinPrice');
        setBitcoinPrice(response.data.precio_bitcoin);
        setVisible(false); // Ocultar el precio antes de actualizar
        setTimeout(() => {
          setVisible(true); // Mostrar el precio actualizado con un efecto de fade in después de 500ms
        }, 500);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    // Fetch data initially and then every 10 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 40000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
        <FaBitcoin size="1.5em" className="inline mr-2" color="gold" />
      {visible ? (
          <span className={`animate__animated animate__fadeIn fadeIn`}>${bitcoinPrice}</span>
      ) : (
          <span className={`animate__animated animate__fadeOut fadeOut`}></span>
      )}
    </>
  );
};

export default BitcoinPrice;
