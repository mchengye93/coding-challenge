import React, { Component } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchRestaurantForm from './SearchRestaurantForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
  }
  componentDidMount() {

    this.getAllRestaurants();
   
  }
  getAllRestaurants() {
    axios.get('/api/restaurants')
    .then((response)=> {
        this.setState({
            restaurants: response.data});
    })
  }
  handleDeleteRestaurant(restaurantId) {
    axios.delete('/api/restaurant', {data: { id: restaurantId}})
    .then((response) => {
      console.log(response);
      this.getAllRestaurants();
      
    })
    .catch((error) => {
      console.log(error);
    });

  }
  render() {
    return (
      <div >
        <h2>Welcome to my Top Restaurant's List!</h2>
        <RestaurantList restaurants={this.state.restaurants} handleDeleteRestaurant={this.handleDeleteRestaurant}/>
        <SearchRestaurantForm />
      </div>
    );
  }
}

export default App;