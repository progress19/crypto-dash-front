import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css'; // Import animate.css

const LoanFlexibleLoanableData = () => {
  const [loanData, setLoanData] = useState(null);
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad de los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get('http://localhost/crypto-dash/public/loanFlexibleLoanableData');
        const response = await axios.get('https://crypto-dash-weld.vercel.app/loanFlexibleLoanableData'); 
        setLoanData(response.data.data.rows);
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
      {visible ? (
        <span className={`animate__animated animate__fadeIn font-number`}>
          
          {loanData && loanData.map((loan, index) => (
            <span key={index}>
              {(parseFloat(loan.flexibleInterestRate) * 100).toFixed(2)}%
            </span>
          ))}

        </span>
      ) : (
        <span className={`animate__animated animate__fadeOut`}>
        
        </span>
      )}
    </>
  );
};

export default LoanFlexibleLoanableData;
