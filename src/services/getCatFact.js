const ENDPOINT = 'https://catfact.ninja/fact';

// const express = require('express')
// const cors = require('cors')
// const app = express()
 
// app.use(cors())
 
// app.get('https://catfact.ninja/fact', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

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
