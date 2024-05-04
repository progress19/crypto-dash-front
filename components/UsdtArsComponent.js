import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";

const UsdtArs = () => {
  const [usdtAsk, setUsdtAsk] = useState(null);
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad del precio actualizado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crypto-dash-weld.vercel.app/getUsdtArs');
        setUsdtAsk(response.data.usdtAsk);
        //setBitcoinPrice(response.data.precio_bitcoin);
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
    const intervalId = setInterval(fetchData, 90000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
        <span className='mr-2'>
        <Image
        src="/usdt.png"
        alt="USDT Logo"
        width={18}
        height={18}
        className={"inline mr-2"}
        priority
      />/ ARS 
        </span>
      {visible ? (
          <span className={`animate__animated animate__fadeIn fadeIn pt-2`}>${usdtAsk}</span>
      ) : (
          <span className={`animate__animated animate__fadeOut fadeOut pt-2`}></span>
      )}
    </>
  );
};

export default UsdtArs;
