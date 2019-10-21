import React from 'react';

const RestaurantItem = (props) => {
 
    let {restaurant} = props;
    function handleDeleteRestaurant() {
        props.handleDeleteRestaurant(restaurant.id);
    }
    return (
        <li className="restaurant">
        <div style={{display: 'flex'}}>
            <div >
                <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
            </div>
            <div >
            <a href={restaurant.url} ><strong>{restaurant.name}</strong></a>
            <em> {restaurant.categories}</em><br/>
            Price: {restaurant.price }<br/>
            {restaurant.phone} <br/>
            {restaurant.location}<br/>
            </div>
            <div>
                <button>Update</button> <br/>
                                        <br/>
                <button onClick={handleDeleteRestaurant}>Delete</button>
            </div>
        </div>
       
        </li>
    )
}

export default RestaurantItem;