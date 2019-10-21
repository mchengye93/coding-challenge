import React from 'react';
import SearchRestaurantItem from './SearchRestaurantItem.jsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
const RestaurantList = (props) => {
    let {restaurants} = props;

    if(restaurants.length) {
        return (
            <div>
                <div style={{ padding: '15px', 
                textAlign: 'center', 
                background: '#d32323',
                color: 'white',
                fontSize: '20px' }}>
                    <h3>Yelp Results</h3>
                </div>
                
                <Table>
                    <TableBody>
                {
                    restaurants.map((restaurant) => {
                        return <SearchRestaurantItem 
                        key={restaurant.id} 
                        restaurant={restaurant} 
                        getAllRestaurants={props.getAllRestaurants}
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
        </div>)
    }
 
}
export default RestaurantList;