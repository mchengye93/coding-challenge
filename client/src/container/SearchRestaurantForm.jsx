import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchRestaurantList from '../components/SearchRestaurantList.jsx'

import axios from 'axios';

class SearchRestaurantForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          restaurants: []
        }

        this.handleSearch  = this.handleSearch.bind(this);
        this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
      }
      handleSearch(event) {
        
        event.preventDefault();
        let restaurant = event.target.search_input.value;

        if (restaurant.length > 0) {
          axios.get('/yelp',{params: { term: restaurant }})
          .then((response)=> {
            var yelpResults = response.data;
            this.setState({ 
                restaurants: yelpResults
            })
          })
          .catch((error) => {
            console.log(error);
          })
        }

      }

      handleAddRestaurant(restaurant) {
        let restaurantObj = {
          name: restaurant.name,
          category: restaurant.categories[0].title,
          price: restaurant.price ? restaurant.price: '$' ,
          location: restaurant.location.display_address.join(' '),
          url: restaurant.url,
          phone: restaurant.display_phone,
          image_url: restaurant.image_url
        }

       axios.post('/api/restaurant', restaurantObj)
       .then((response) => {
        console.log(response);
       })
       .catch((error)  => {
        console.log(error);
       }); 

       


      }
      render() {
        return (
          <div >
            <SearchBar handleSearch={this.handleSearch}/>
            
            <SearchRestaurantList restaurants={this.state.restaurants} handleAddRestaurant={this.handleAddRestaurant}/>
          </div>
        );
      }
}
    
export default SearchRestaurantForm;