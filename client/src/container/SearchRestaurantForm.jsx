import React, { Component } from 'react';
import YelpSearchBar from '../components/YelpSearchBar.jsx';
import SearchRestaurantList from '../components/SearchRestaurantList.jsx'

import axios from 'axios';

class SearchRestaurantForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          restaurants: []
        }

        this.handleSearch  = this.handleSearch.bind(this);
      }
      handleSearch(event) {
        
        event.preventDefault();
        let restaurant = event.target.search_input.value;

        if (restaurant.length > 0) {
          axios.get('/api/yelp',{params: { term: restaurant }})
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

      render() {
        return (
          <div >
            <YelpSearchBar handleSearch={this.handleSearch}/>

            <SearchRestaurantList 
            restaurants={this.state.restaurants} 
            getAllRestaurants={this.props.getAllRestaurants}/>
          </div>
        );
      }
}
    
export default SearchRestaurantForm;