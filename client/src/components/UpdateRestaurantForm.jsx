import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';



class UpdateRestaurantForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
        open: false,
        name: props.restaurant.name,
        price: props.restaurant.price,
        phone: props.restaurant.phone,
        categories: props.restaurant.categories,
        location : props.restaurant.location
        
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
    
    }

    handleClickOpen() {
        this.setState({open: true});
      }

    handleClose() {
        this.setState({open: false});
      }

    handleUpdate(event) {
    
    
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
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                  Update
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
                      name="categories"
                      onChange={this.handleInputChange}
                      margin="normal"
                      variant="outlined"
                      value = {this.state.categories}
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
                    <Button onClick={this.handleUpdate} color="primary">
                      Update
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            );
        }
}

export default UpdateRestaurantForm;