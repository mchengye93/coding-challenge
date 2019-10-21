const connection = require('./connection.js');


/* Restaurants CRUD */

const getAllRestaurants = () => {
    const query = 'SELECT * FROM restaurants';

    return new Promise( (resolve, reject) => {
        connection.query(query, (err,results) => {
            if (err) return reject(err);
            resolve(results.rows);
        })
    })

}

const addRestaurant = (restaurant) => {
    let name= restaurant.name;
    let category= restaurant.category;
    let price = restaurant.price;
    let location =  restaurant.location;
    let url = restaurant.url;
    let image_url = restaurant.image_url;
    let phone = restaurant.phone;
   
    

    const query = `INSERT INTO restaurants (name,categories,price,location,url,image_url,phone) VALUES ('${name}', 
    '${category}','${price}','${location}','${url}','${image_url}','${phone}')`;

    return new Promise((resolve, reject) => {
        connection.query(query, (err, res) => {
          if (err) {
              console.log(err);
              return reject(err);
          }
          resolve(res);
        });
      });
}

const updateRestaurant = (restaurant) => {
    const {id, name,categories, phone, price, location} = restaurant;
    const query =  `UPDATE restaurants SET name = ${name}, phone= ${phone}, categories = ${categories}, ` +
    `price = ${price} , location = ${location} WHERE  id = ${id}`;

    return new Promise((resolve,reject) => {
        connection.query(query, (err,res) => {
            if(err) return reject(err);
            resolve(res);
        })
    })
    
}

const deleteRestaurant = (restaurantId) => {

    const query = `DELETE FROM restaurants WHERE id=${restaurantId}`;

    return new Promise((resolve,reject) => {
        connection.query(query, (err,res) => {
            if(err) return reject(err);
            resolve(res);
        })
    })
}


module.exports  = {
    getAllRestaurants,
    addRestaurant, 
    updateRestaurant,
    deleteRestaurant
}