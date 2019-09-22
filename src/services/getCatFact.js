const ENDPOINT = 'https://catfact.ninja/fact';

export const getCatFact = () => {
  return fetch(ENDPOINT, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.error(error))
};
