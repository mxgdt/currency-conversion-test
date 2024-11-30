import React, { useState } from "react";
import Rates from "../components/Rates";

const RatesPage = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");

  return (
    <div>
      <h1>Курсы валют</h1>
      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
      </select>
      <Rates baseCurrency={baseCurrency} />
    </div>
  );
};

export default RatesPage;
