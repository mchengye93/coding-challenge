import React, { Component } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SearchRestaurantForm from './SearchRestaurantForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      categories: [],
      search:false,
      searchInput: '',
      category: 'All'
    }
    this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
    this.search = this.search.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {

    this.getAllRestaurants();
   
  }
  getAllRestaurants() {
    console.log('calling get all restaurants');
    axios.get('/api/restaurants')
    .then((response)=> {
        let categories = this.getAllCategories(response.data);
        this.setState({
            restaurants: response.data,
            categories: categories});
        
    })
  }

  getAllCategories(restaurants) {
    console.log('calling getAllCategories!');
    let categories = [];

    for (let i = 0; i < restaurants.length; i++) {
      let restaurant = restaurants[i];
      if(!categories.includes(restaurant.categories)) {
        categories.push(restaurant.categories);
      }
    }
    return categories;


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
  handleSearch(e) {
    console.log("handleSearch called!");
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.searchInput.value); 
    console.log(e.target.category.value);
    let search = e.target.searchInput.value;
    let cat = e.target.category.value;

    console.log(search, cat);
    this.setState({
      searchInput: search,
      category:cat
    })
    
  }

  search() {
    this.setState({search: false});
  } 
  addRestaurant() {
    this.setState({search: true});
  }
  render() {
    //console.log(this.state);
    let {searchInput , category, restaurants} = this.state;
    let restaurantsList = restaurants;
    console.log(restaurants);
    
    if (category !== 'All') {
      restaurantsList = restaurants.filter((restaurant) => {
        console.log('searchinout:',searchInput);
        return restaurant.name.toLowerCase().includes(searchInput.toLowerCase()) && restaurant.categories === category;
      })
    } else {
      restaurantsList = restaurants.filter((restaurant) => {
        console.log('searchinout:',searchInput);
  
        return restaurant.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    }
   
    
    return (
      <div >
        <h2>Welcome to my Top Restaurant's List!</h2>
        <button onClick={this.addRestaurant}>Add Restaurant</button> <button onClick={this.search}>Search</button>
        {this.state.search ? <SearchRestaurantForm /> : <RestaurantList 
        restaurants={restaurantsList} 
        handleDeleteRestaurant={this.handleDeleteRestaurant}
        categories={this.state.categories}
        handleSearch={this.handleSearch}/>
        } 
      </div>
    );
  }
}

export default App;