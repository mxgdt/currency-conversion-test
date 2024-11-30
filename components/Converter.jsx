import React, { useState } from "react";
import { convertCurrency } from "../services/api";

const Converter = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    const match = query.match(/(\d+)\s(\w+)\sin\s(\w+)/i);
    if (!match) {
      setError("Введите запрос в формате: '15 usd in rub'");
      return;
    }

    const [_, amount, from, to] = match;
    try {
      const conversion = await convertCurrency(amount, from.toUpperCase(), to.toUpperCase());
      setResult(`${amount} ${from.toUpperCase()} = ${conversion} ${to.toUpperCase()}`);
      setError("");
    } catch {
      setError("Ошибка при конвертации. Проверьте формат ввода.");
    }
  };

  return (
    <div>
      <h2>Конвертер валют</h2>
      <input
        type="text"
        placeholder="15 usd in rub"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleConvert}>Конвертировать</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Converter;
