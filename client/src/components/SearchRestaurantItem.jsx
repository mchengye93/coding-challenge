import React from 'react';

const SearchRestaurantItem = (props) => {
 
    let {restaurant} = props;

    function handleAddRestaurant() {
        console.log('called handleADd inside search item!', restaurant);
        props.handleAddRestaurant(restaurant);
    }

    return (
        <li className="restaurant">
        <div style={{display: 'flex'}}>
            <div >
                <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
            </div>
            <div >

            <a href={restaurant.url} ><strong>{restaurant.name}</strong></a>
            <em> {restaurant.categories[0].title}</em><br/>
            Price: {restaurant.price ? restaurant.price: '$' }<br/>
            {restaurant.display_phone} <br/>
            {restaurant.location.display_address.join(' ')}<br/>
            </div>
            <div>
            <button onClick={handleAddRestaurant}>Add</button>
            </div>
        </div>
       
        </li>
    )
}

export default SearchRestaurantItem;