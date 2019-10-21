import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';



class DeleteRestaurantDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
        open: false,
        id: props.restaurant.id,
        name: props.restaurant.name,
        price: props.restaurant.price,
        phone: props.restaurant.phone,
        categories: props.restaurant.categories,
        location : props.restaurant.location,
        image_url: props.restaurant.image_url
        
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleClickOpen() {
        this.setState({open: true});
      }

    handleClose() {
        this.setState({open: false});
      }

    handleDelete(event) {
    event.preventDefault();
    axios.delete('/api/restaurant', {data: { id: this.state.id}})
    .then((response) => {
      this.props.getAllRestaurants();
      
    })
    .catch((error) => {
      console.log(error);
    });
    
    
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
      let restaurant = this.state;
            return (
                <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                 Delete
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Delete Restaurant</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure you want to delete?
                    </DialogContentText>
                    <div className ="flex" >
                        <div className="w-25 pa1 ">
                            <img src={restaurant.image_url} alt={restaurant.name + 'photo'} height="100" width="100"/>
                        </div>
                        <div className="w-50 pa1" >
                        <a href={restaurant.url} ><strong>{restaurant.name}</strong></a>
                        <em> {restaurant.categories}</em><br/>
                        Price: {restaurant.price }<br/>
                        {restaurant.phone} <br/>
                        {restaurant.location}<br/>
                        </div>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleDelete} color="primary">
                      Delete
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

export default DeleteRestaurantDialog;