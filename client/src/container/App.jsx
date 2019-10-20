import React, { Component } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }
  componentDidMount() {

    axios.get('/api/restaurants')
    .then((response)=> {
        this.setState({
            restaurants: response.data});
          })
   
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to my Top Restaurant's List!</h2>
        <RestaurantList/>
      </div>
    );
  }
}

export default App;