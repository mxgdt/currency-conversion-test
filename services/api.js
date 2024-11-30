const BASE_URL = "https://api.exchangerate.host";

export const getRates = async (baseCurrency) => {
  const response = await fetch(`${BASE_URL}/latest?base=${baseCurrency}`);
  const data = await response.json();
  return data.rates;
};

export const convertCurrency = async (amount, from, to) => {
  const response = await fetch(
    `${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}`
  );
  const data = await response.json();
  return data.result;
};
