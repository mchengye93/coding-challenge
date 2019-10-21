import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';



const SearchList = (props) => {
    
    return (
        <div className="pa4">
         <form  onSubmit={props.handleSearch} >
             <input  type ="text"  name="searchInput" placeholder="Search Top Restaurants"  />
             <select  name="category">
                 <option value="All">All</option>
                 {props.categories.map((category)=> {
                     return <option value={category}>{category}</option>
                 })}
          
             </select>
             <input  type="submit" value="search" onSubmit={props.handleSearch}/>
         </form>
  
         </div>
    )
}

export default SearchList;