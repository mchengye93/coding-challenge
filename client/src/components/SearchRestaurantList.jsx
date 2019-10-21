import React from 'react';
import SearchRestaurantItem from './SearchRestaurantItem.jsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
const RestaurantList = (props) => {
    let {restaurants} = props;

    if(restaurants.length) {
        return (
        
            <div className="pa1">
                <h3>Yelp Results:</h3>
                <Table>
                    <TableBody>
                {
                    restaurants.map((restaurant) => {
                        return <SearchRestaurantItem 
                        key={restaurant.id} 
                        restaurant={restaurant} 
                        handleAddRestaurant= {props.handleAddRestaurant}/>
                    })
                }
                    </TableBody>
                </Table>
                
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