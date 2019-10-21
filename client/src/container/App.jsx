import React, { Component } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList.jsx';
import SearchBar from '../components/YelpSearchBar.jsx';
import SearchRestaurantForm from './SearchRestaurantForm.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      categories: [],
      search:false,
      searchInput: '',
      category: 'All',
  
    }
    this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
            categories: categories,
            search: 0,
          });
        
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
  handleChange(e){
    console.log(e.target.innerHTML);
    let text = e.target.innerHTML;
    if (text.toUpperCase() === 'SEARCH') {
      this.setState({search: 0});
    } else {
      this.setState({search: 1});
    }
 
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
      <div className='App tc '>
        <div style={{ padding: '15px', 
        textAlign: 'center', 
        background: '#d32323',
        color: 'white',
        fontSize: '25px' }}>
        <h2>Top Restaurant's List</h2>
        </div>
       
        <div>
        <Paper >
          <Tabs
            value={this.state.search}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Search"/>
            <Tab label="Add Restaurant"/>
          </Tabs>
        </Paper>
        </div>
        <div className='flex justify-center'>
        {this.state.search ? <SearchRestaurantForm 
        getAllRestaurants={this.getAllRestaurants}
        /> : <RestaurantList 
        restaurants={restaurantsList} 
        handleDeleteRestaurant={this.handleDeleteRestaurant}
        categories={this.state.categories}
        handleSearch={this.handleSearch}
        getAllRestaurants={this.getAllRestaurants}/>
        } 
        </div>
      
      </div>
    );
  }
}

export default App;