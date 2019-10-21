import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';
import SearchList from './SearchList.jsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
const RestaurantList = (props) => {
    let {restaurants, categories, handleDeleteRestaurant, getAllRestaurants} = props;
   
    return (
        <div>
            <h3>Restaurants Listings:</h3>
            <SearchList categories={categories} handleSearch={props.handleSearch}/>
            <Table>
                    <TableBody>
            {
                restaurants.map((restaurant) => {
                    return <RestaurantItem 
                    key={restaurant.id} 
                    restaurant={restaurant} 
                    handleDeleteRestaurant={handleDeleteRestaurant}
                    getAllRestaurants={getAllRestaurants}/>
                })
            }
                </TableBody>
            </Table>
           
            
        </div>
    )
}
export default RestaurantList;