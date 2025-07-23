export async function getAdaUsdTicker() {
  const response = await fetch(
    new Request("https://api.livecoinwatch.com/coins/single"),
    {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": process.env.EXPO_PUBLIC_LIVE_COIN_WATCH_API_KEY as string,
      }),
      body: JSON.stringify({
        currency: "USD",
        code: "ADA",
        meta: true,
      }),
    }
  );
  const data = await response.json();
  return data;
}
