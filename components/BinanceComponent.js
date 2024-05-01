// BinanceComponent.js
import { useEffect } from 'react';
import { Spot } from '@binance/connector';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY;
const apiSecret = process.env.BINANCE_API_SECRET;

const client = new Spot(apiKey, apiSecret);

// Ejecutar las llamadas a la API de Binance directamente
// Esto se ejecutará una vez cuando el módulo se importe
(async () => {
  try {
    // Obtener información de la cuenta
    const accountInfo = await client.account();
    console.log(accountInfo.data);

    // Realizar una nueva orden
    const orderResponse = await client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
      price: '350',
      quantity: 1,
      timeInForce: 'GTC'
    });
    console.log(orderResponse.data);
  } catch (error) {
    console.error(error);
  }
})();

// No exportamos ningún componente, ya que esta lógica se ejecuta directamente al importar el módulo
