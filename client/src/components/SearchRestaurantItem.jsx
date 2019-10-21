import React from 'react';

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const SearchRestaurantItem = (props) => {
 
    let {restaurant} = props;

    function handleAddRestaurant() {
        props.handleAddRestaurant(restaurant);
    }

    return (
        // <li className="restaurant">
        // <Table>
        //       <TableBody>
           
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
                    <button onClick={handleAddRestaurant}>Add</button>
                </TableCell>
              </TableRow>
           
        //   </TableBody>
        // </Table>
        // </li>
    )
}

export default SearchRestaurantItem;