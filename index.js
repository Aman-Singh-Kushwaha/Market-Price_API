const express = require('express')
const fs = require('fs')
const app = express()
const port = 5500
app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/market_prices", (req, res) => {
  fs.readFile(__dirname + '/' + 'price.json', (err, data) => {
      res.end(data);
  });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
    console.log(`Market App is Listening at https://localhost:${port}/market_prices`)
  });

