const ENDPOINT = 'https://api.thecatapi.com/v1/images/search';

export const getCat = () => {
  return fetch(ENDPOINT)
    .then(response => response.json())
    .catch(error => console.error(error))
};
