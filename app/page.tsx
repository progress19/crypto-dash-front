"use client"; 
import "../css/global.css"; 
import Head from "next/head";
import Image from "next/image";

//import React from "react";
import React, { useEffect, useState } from "react";

import "animate.css/animate.min.css";

import BitcoinPrice from "../components/BitcoinPriceComponent";
import LoanFlexibleLoanableData from "../components/LoanFlexibleLoanableDataComponent";
import ApyBorrowCoin from "../components/ApyBorrowCoinTron";
import EarnFlexibleList from "../components/EarnFlexibleListComponent";

/* Fuentes */
import { Roboto } from "next/font/google";
const roboto_init = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '500'
})

import { Noto_Sans } from "next/font/google";
const noto_init = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: '500'
})

import { Lato } from "next/font/google";
const lato_init = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400'
})

import { Poppins } from "next/font/google";
const poppins_init = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
})

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

    <span className={`${roboto_init.className} text-4xl font-bold px-3 text-slate-300 `}>Crypto-Dash</span>
    <span className={`${noto_init.className} text-4xl font-bold px-3 text-slate-600`}>Crypto-Dash</span>
    <span className={`${lato_init.className} text-4xl font-bold px-3 text-zinc-500`}>Crypto-Dash</span>
    <span className={`${lato_init.className} text-4xl font-bold px-3 text-neutral-400`}>Crypto-Dash</span>
    <span className={`${lato_init.className} text-4xl font-bold px-3 text-stone-700 `}>Crypto-Dash</span>
    <span className={`${lato_init.className} text-4xl font-bold px-3 text-teal-500 `}>Crypto-Dash</span>
    <span className={`${poppins_init.className} text-4xl font-bold px-3 text-teal-500 `}>Crypto-Dash</span>
    <span className={`${poppins_init.className} text-4xl font-bold px-3 text-teal-500 `}>Crypto-Dash</span>

      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1e2026] p-3 rounded-md" >
            <span></span>
            <BitcoinPrice />
          </div>

          <div className="bg-[#1e2026] p-3 rounded-md">
            
          <div className={poppins_init.className}>
            <p className="text-slate-300">BORROW APY</p>
            
            </div>
            <hr />
            <div className={`${noto_init.className} font-semibold mt-3 font-text text-slate-300 `}>
              Binance
            </div>
            
            <div className={`${noto_init.className} min-h-8 pt-1`}>
              <Image
                src="/axs.png"
                alt="Axs Logo"
                width={20}
                height={20}
                className={"inline mr-2"}
                priority
              />
              <LoanFlexibleLoanableData />
            </div>
            
            <div className="font-semibold font-text text-gray-200 pt-2">
              <p className={poppins_init.className}>Just Lend</p> 
            </div>
            <div className="min-h-8 pt-1">
              <Image
                src="/usdt.png"
                alt="USDT Logo"
                width={20}
                height={20}
                className={"inline mr-2"}
                priority
              />
              <span className="font-number">
              < ApyBorrowCoin />
              </span>
            
              </div>
          </div>
          
          <div className="bg-[#1e2026] p-3 rounded-md">
            <div className={`${poppins_init.className} font-text text-slate-300`}>SUPPLY APY</div>
            <hr />
            <div className="font-semibold mt-3 font-text text-gray-200">
              Binance
            </div>
            <div className="min-h-8 pt-1">
              <Image
                src="/usdt.png"
                alt="USDT Logo"
                width={20}
                height={20}
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
