import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';
import SearchList from './SearchList.jsx';

const RestaurantList = (props) => {
    let {restaurants, categories} = props;
   
    return (
        <div>
            <h3>Restaurants Listings:</h3>
            <SearchList categories={categories} handleSearch={props.handleSearch}/>

            <ul>
            {
                restaurants.map((restaurant) => {
                    return <RestaurantItem key={restaurant.id} restaurant={restaurant} handleDeleteRestaurant={props.handleDeleteRestaurant}/>
                })
            }
            </ul>
            
        </div>
    )
}
export default RestaurantList;