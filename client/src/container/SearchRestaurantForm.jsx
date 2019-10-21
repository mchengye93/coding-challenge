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
        console.log(event.target.search_input.value);
        let restaurant = event.target.search_input.value;

        if (restaurant.length > 0) {
          axios.get('/yelp',{params: { term: restaurant }})
          .then((response)=> {
            var yelpResults = response.data;
            console.log(yelpResults);
            this.setState({ 
                restaurants: yelpResults
            })
          })
          .catch((error) => {
            console.log(error);
          })
        }

      }

      handleAddRestaurant(event) {

      }
      render() {
        return (
          <div >
            <h2>Welcome to Search Restaurant!</h2>
            <SearchBar handleSearch={this.handleSearch}/>
            <SearchRestaurantList restaurants={this.state.restaurants}/>
          </div>
        );
      }
}
    
export default SearchRestaurantForm;