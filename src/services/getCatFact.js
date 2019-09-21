const ENDPOINT = 'https://catfact.ninja/fact';

export const getCatFact = () => {
  return fetch(ENDPOINT, {
      method: 'GET', 
      headers: {
        "Access-Control-Allow-Origin": ENDPOINT,
        'Content-Type': 'application/json',
      }
      })
    .then(response => response.json())
    .catch(error => console.error(error))
};
