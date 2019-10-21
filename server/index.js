const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const restaurants = require('../db-postgres/controller.js');


const yelp = require('yelp-fusion');
const apiKey = 'vilsC_dxi8j0B-zlZe5mJ4ia3E_12HK4-Q4xeOnYQchP8671Q2iFRFcCD3KhgA70UidkPlRUkbI0TyQSsUGzPm3D_pity25C9mcFpRpFpDmGJ_HqkE_yewIVkWQOXXYx';

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.listen(PORT, () => console.log('Listening on port: ' + PORT));


/* CREATE restaurant */
app.post('/api/restaurant', async (req, res) => {
  try {
    console.log('inside server api post restaurant', req.body);
    let restaurant = req.body;
    const addRestaurant = await restaurants.addRestaurant(restaurant);
    res.status(201).send(addRestaurant);

  } catch(e) {
    res.status(400).send(e);
  }
})

/* READ all restaurants */
app.get('/api/restaurants', async (req, res) => {
    try {
      const allRestaurants = await restaurants.getAllRestaurants();
      res.status(200).send(allRestaurants);
    } catch (e) {
      res.status(400).send(e);
    }
  });




/* READ Yelp's restaurants */
  app.get('/yelp', (req,res)=> {
    var term = req.query.term;
  
    const searchRequest = {
      term:term,
      location: 'san francisco, ca',
     
    };
    const client = yelp.client(apiKey);
    
    client.search(searchRequest).then(response => {
      const results = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(results, null, 4);
      console.log(prettyJson);
      res.status(200);
      res.send(prettyJson);
    }).catch(e => {
      res.status(400);
      res.send(e);
    });
    

  });