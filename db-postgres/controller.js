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

module.exports  = {
    getAllRestaurants
}