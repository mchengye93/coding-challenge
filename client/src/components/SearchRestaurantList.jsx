import React from 'react';
import SearchRestaurantItem from './SearchRestaurantItem.jsx';

const RestaurantList = (props) => {
    let {restaurants} = props;

    if(restaurants.length) {
        return (
        
            <div className="pa1">
                <h3>Yelp Results:</h3>
                <ul style={{listStyleType: 'none'}}>
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
    } else {
        return ( 
        <div>
            Search for restaurants...
        </div>)
    }
 
}
export default RestaurantList;