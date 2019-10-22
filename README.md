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

##SETUP DATABASE


## CRUD
                        
                          CRUD OPERATIONS for Restaurants

### RESTAURANTS TABLE

| API Endpoints  | Request Type | Input | Output | Description  |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| /api/restaurants | GET  | | Status: 200 {"id": INT,"name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT}| This request will return all the restaurants records  |
| /api/restaurant | POST  |  {"name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT} }| Status:201 Created| This will add a new  record to restaurants table |
| /api/stock/:stockId | PUT  |  {"id": INT, name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT}| Status:200| This will update the given id if it exists in the restaurants table.  |
| /api/stock/:restaurantId | DELETE  | {restaurantId: INT} | Status: 200  | This will delete a record with given restautant record if it exists on restaurants table.  | 
| /api/yelp | GET  | {"term": VARCHAR} | Status: 200 {"id": INT,"name": VARCHAR "categories": VARCHAR, "price": VARCHAR, "location": VARCHAR ,"url": TEXT ,"phone": VARCHAR,"image_url": TEXT}| This request will return all the restaurants records  |

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
