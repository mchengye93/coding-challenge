import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import AddRestaurantForm from './AddRestaurantForm.jsx';

const SearchRestaurantItem = (props) => {
 
    let {restaurant} = props;

    function handleAddRestaurant() {
        props.handleAddRestaurant(restaurant);
    }

    return (

              <TableRow key={restaurant.name}>
                
                <TableCell >  
                    <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
                </TableCell>
                <TableCell >
                    <a href={restaurant.url} ><strong>{restaurant.name}</strong></a> <br/>
                    <em> {restaurant.categories[0].title} </em>
                    {restaurant.price ? restaurant.price: '$' }<br/>
                    {restaurant.display_phone} <br/>
                    {restaurant.location.display_address.join(' ')}<br/>
                </TableCell>
                <TableCell >  
                    <AddRestaurantForm restaurant={restaurant} getAllRestaurants={props.getAllRestaurants}/>
                </TableCell>
              </TableRow>
    )
}

export default SearchRestaurantItem;