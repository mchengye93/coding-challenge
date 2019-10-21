import React from 'react';
import UpdateRestaurantForm from './UpdateRestaurantForm.jsx';
const RestaurantItem = (props) => {
 
    let {restaurant} = props;
    function handleDeleteRestaurant() {
        props.handleDeleteRestaurant(restaurant.id);
    }
    return (
        <li className="restaurant">
        <div className ="flex" >
            <div className="w-25 pa1 ">
                <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
            </div>
            <div className="w-50 pa1" >
            <a href={restaurant.url} ><strong>{restaurant.name}</strong></a>
            <em> {restaurant.categories}</em><br/>
            Price: {restaurant.price }<br/>
            {restaurant.phone} <br/>
            {restaurant.location}<br/>
            </div>
            <div className="w-25 pa1 ">
                <UpdateRestaurantForm restaurant={restaurant}/> <br/>
                <button onClick={handleDeleteRestaurant}>Delete</button>
            </div>
        </div>
       
        </li>
    )
}

export default RestaurantItem;