"use client"; // Marca este componente como un componente de cliente
import "../css/global.css"; // Import your global CSS file
import Head from "next/head";
import Image from "next/image";

//import React from "react";
import React, { useEffect, useState } from "react";

import "animate.css/animate.min.css";

import BitcoinPrice from "../components/BitcoinPriceComponent";
import LoanFlexibleLoanableData from "../components/LoanFlexibleLoanableDataComponent";
import ApyBorrowCoin from "../components/ApyBorrowCoinTron";
import EarnFlexibleList from "../components/EarnFlexibleListComponent";

const DashBoardPage = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      // Cargar el script de la librería externa si aún no se ha cargado
      const script = document.createElement("script");
      script.src = "https://www.cryptohopper.com/widgets/js/script";
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    }

    // Limpia el script cuando el componente se desmonte para evitar fugas de memoria
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://www.cryptohopper.com/widgets/js/script"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [scriptLoaded]);

  return (
    <>
      <title>CryptoDash</title>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1e2026] p-3 rounded-md">
            <BitcoinPrice />
          </div>

          <div className="bg-[#1e2026] p-3 rounded-md">
            <div className="font-text">BORROW APY</div>
            <hr />
            <div className="font-semibold mt-3 font-text text-gray-200">
              Binance
            </div>
            <div className="min-h-8">
              <Image
                src="/axs.png"
                alt="Axs Logo"
                width={25}
                height={25}
                className={"inline mr-2"}
                priority
              />
              <LoanFlexibleLoanableData />
            </div>
            <div className="font-semibold font-text text-gray-200">
              Just Lend
            </div>
            <div className="min-h-8">
              <Image
                src="/usdt.png"
                alt="USDT Logo"
                width={25}
                height={25}
                className={"inline mr-2"}
                priority
              />
              <ApyBorrowCoin />
            </div>
          </div>
          
          <div className="bg-[#1e2026] p-3 rounded-md">
            <div className="font-text">SUPPLY APY</div>
            <hr />
            <div className="font-semibold mt-3 font-text text-gray-200">
              Binance
            </div>
            <div className="min-h-8">
              <Image
                src="/usdt.png"
                alt="USDT Logo"
                width={25}
                height={25}
                className={"inline mr-2"}
                priority
              />
              <EarnFlexibleList />
            </div>
          </div>

          <div className="bg-[#1e2026] p-3 rounded-md">
            <div
              className="cryptohopper-web-widget"
              data-id="1"
              data-table_columns="rank,name,price_usd,percent_change_24h,weekly"
              data-coins="bitcoin,ethereum,bnb,tron,axie-infinity,ronin,pancakeswap-token"
              data-table_style="dark"
              data-realtime="on"
            ></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
