import React from 'react';
import UpdateRestaurantForm from './UpdateRestaurantForm.jsx';
import DeleteRestaurantDialog from './DeleteRestaurantDialog.jsx';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const RestaurantItem = (props) => {
 
    let {restaurant, getAllRestaurants} = props;
    function handleDeleteRestaurant() {
        props.handleDeleteRestaurant(restaurant.id);
    }
    return (
        <TableRow key={restaurant.name}>
                
        <TableCell >  
            <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
        </TableCell>
        <TableCell >
            <a href={restaurant.url} ><strong>{restaurant.name}</strong></a>
            <em> {restaurant.categories}</em><br/>
            Price: {restaurant.price }<br/>
            {restaurant.phone} <br/>
            {restaurant.location}<br/>
        </TableCell>
        <TableCell >  
            <UpdateRestaurantForm 
                restaurant={restaurant} 
                getAllRestaurants={getAllRestaurants}/> <br/>

            <DeleteRestaurantDialog 
                restaurant={restaurant} 
                getAllRestaurants={getAllRestaurants}/>
        </TableCell>
      </TableRow>

        
    )
}

export default RestaurantItem;