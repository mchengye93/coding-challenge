import React from 'react';

const SearchRestaurantItem = (props) => {
 
    let {restaurant} = props;

    function handleAddRestaurant() {
        props.handleAddRestaurant(restaurant);
    }

    return (
        <li className="restaurant">
        
        <div style={{display: 'flex'}}>
            <div className='pa1' >
                <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
            </div>
            <div >

            <a href={restaurant.url} ><strong>{restaurant.name}</strong></a> <br/>
            <em> {restaurant.categories[0].title} </em>
            {restaurant.price ? restaurant.price: '$' }<br/>
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