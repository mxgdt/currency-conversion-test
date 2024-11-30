import React, { useEffect, useState } from "react";
import { getRates } from "../services/api";

const Rates = ({ baseCurrency }) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      const fetchedRates = await getRates(baseCurrency);
      setRates(fetchedRates);
      setLoading(false);
    };
    fetchRates();
  }, [baseCurrency]);

  if (loading) return <p>Загрузка курсов...</p>;

  return (
    <div>
      <h2>Текущие курсы валют (Базовая: {baseCurrency})</h2>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            1 {baseCurrency} = {rate} {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rates;
