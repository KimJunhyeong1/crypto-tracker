const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  const response = await fetch(`${BASE_URL}/coins`);

  return response.json();
};

export const fetchCoinInfo = async (coinId?: string) => {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);

  return response.json();
};

export const fetchPriceData = async (coinId?: string) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);

  return response.json();
};
