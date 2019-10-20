const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const restaurants = require('../db-postgres/controller.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Listening on port: ' + PORT));


app.get('/api/restaurants', async (req, res) => {
    try {
      const allRestaurants = await restaurants.getAllRestaurants();
      res.status(200).send(allRestaurants);
    } catch (e) {
      res.status(400).send(e);
    }
  });