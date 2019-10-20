import React from 'react';

const RestaurantItem = (props) => {
 
    let {restaurant} = props;
    return (
        <li className="restaurant">
            <span>
                {restaurant.url}
            </span>
            <span>
                
                {restaurant.id}  
               
                {restaurant.name} 
                
                {restaurant.categories}
            </span>   
        </li>
    )
}

export default RestaurantItem;