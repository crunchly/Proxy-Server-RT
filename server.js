const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios')

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client')));


app.use('/funding-rounds', (req, res) => {
  fetch(`http://localhost:3001${req.originalUrl}`)
    .then(fetchRes => fetchRes.json())
    .then(data => res.send(data));
});

app.use('/overview', (req, res) => {
  fetch(`http://localhost:3002${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data));
});

app.use('/people', (req, res) => {
  fetch(`http://localhost:3004${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data));
});

app.use('/api/funding_round', (req, res) => {
  fetch(`http://localhost:3003${req.originalUrl}`)
    .then(response => response.json())
    .then(data => res.send(data));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
