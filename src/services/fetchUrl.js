const fetchUrl = (url) => fetch(url).then(response=> response.json().catch(error => console.log(error)));

export default fetchUrl;