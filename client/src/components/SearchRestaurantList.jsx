import React from 'react';
import SearchRestaurantItem from './SearchRestaurantItem.jsx';

const RestaurantList = (props) => {
    let {restaurants} = props;
   
    return (
        <div>
            <h3>Restaurants Listings:</h3>
            <ul>
            {
                restaurants.map((restaurant) => {
                    return <SearchRestaurantItem 
                    key={restaurant.id} 
                    restaurant={restaurant} 
                    handleAddRestaurant= {props.handleAddRestaurant}/>
                })
            }
            </ul>
            
        </div>
    )
}
export default RestaurantList;