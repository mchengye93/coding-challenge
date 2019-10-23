# Hanwha Q CELLS Coding Challenge


## Full Stack Application
1. Frontend (React.js)
2. Backend (Express)
3. Database (PostgreSQL)
4. API (Yelp's API)

## Installation

```sh
npm install
npm run react-dev
npm start
```

##SETUP PostgresSQL DATABASE

1. psql -U postgres

2. Once connected run the following commands:
DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;

\c restaurants;

CREATE TABLE restaurants (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  categories varchar(50) NOT NULL,
  price varchar(10) NOT NULL,
  location varchar(150) NOT NULL,
  url text NOT NULL,
  phone varchar(25) NOT NULL,
  image_url text
);

### Using the Application
1. Search for restaurant to add to list
    - Click on "ADD RESUTANRANT" tab
    - Provide a restaurant name on search (search location based in San Francisco)
    - Click on "ADD" button and this will create a form to add restaurant to list
        - Modify form as you like
2. Search for top restaurants in database
    - Click on "SEARCH" tab and you can find top by categories
    - You can also search in list to see if it exist on list
3. Update restaurants from application
    - Click on "SEARCH" and restaurant listed will have an update button allowing you to modify restaurant's information
4. Delete restaurant from application
    - Click on "SEARCH" and restaurant listed will have an delete button allowing you to the delete a restaurant
    
## CRUDL
                        
                          CRUD OPERATIONS for Restaurants

### RESTAURANTS TABLE

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/restaurants | GET  | | Status: 200 {"id": INT,"name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT}| This request will return all the restaurants records  |
| /api/restaurant | POST  |  {"name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT} }| Status:201 Created| This will add a new  record to restaurants table |
| /api/restaurant/ | PUT  |  {"id": INT, name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT}| Status:200| This will update the given id if it exists in the restaurants table.  |
| /api/restaurant/ | DELETE  | {restaurantId: INT} | Status: 200  | This will delete a record with given restautant record if it exists on restaurants table.  | 
| /api/yelp/ | GET  | {"term": VARCHAR} | Status: 200  {"name": VARCHAR, "image_url": VARCHAR, "url": VARCHAR "price": VARCHAR, "categories": [{"alias": VARCHAR,"title": VARCHAR}, "location": {"address1": VARCHAR, "address2": VARCHAR, "address3": VARCHAR,"city": VARCHAR, "zip_code": VARCHAR,"country": VARCHAR, "state": VARCHAR, "display_address": [VARCHAR]}, "display_phone": VARCHAR}| This request will a list of yelp business records that matches term|

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
