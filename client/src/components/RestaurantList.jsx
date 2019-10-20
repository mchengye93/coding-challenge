import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';

const RestaurantList = (props) => {
    let {restaurants} = props;
   
    return (
        <div>
            <h3>Restaurants Listings:</h3>
            <ul>
            {
                restaurants.map((restaurant) => {
                    return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
                })
            }
            </ul>
            
        </div>
    )
}
export default RestaurantList;