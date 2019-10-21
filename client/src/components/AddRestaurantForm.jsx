import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';



class AddRestaurantForm extends Component {
    constructor(props) {
        super(props);
        let {restaurant} = this.props;
        let price = restaurant.price ?restaurant.price: '$';
        
        this.state = {
        open: false,
        url: restaurant.url,
        id: restaurant.id,
        name: restaurant.name,
        price: price,
        phone: restaurant.display_phone,
        category: restaurant.categories[0].title,
        location: restaurant.location.display_address.join(' '),
        image_url: restaurant.image_url,
        
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleAddRestaurant() {
      
       axios.post('/api/restaurant', this.state)
       .then((response) => {
        this.props.getAllRestaurants();
        
       })
       .catch((error)  => {
        console.log(error);
       }); 
    }

    handleClickOpen() {
        this.setState({open: true});
      }

    handleClose() {
        this.setState({open: false});
      }

  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
 
        this.setState({
            [name]: value
            });
        
      }

    render() {
        console.log(this.state);
            return (
                <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                  Add
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Update Restaurant</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please put corresponding information for the restaurant
                    </DialogContentText>
                   
                    <form  enctype="multipart/form-data" > 
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Name"
                      name="name"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.name}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Category"
                      name="category"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.category}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Price"
                      name="price"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.price}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Phone"
                      name="phone"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.phone}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Location"
                      name="location"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.location}
                    />
                     
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleAddRestaurant} color="primary">
                      Add
                    </Button>
                    <Button onClick={this.handleClose} color="secondary">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            );
        }
}

export default AddRestaurantForm;