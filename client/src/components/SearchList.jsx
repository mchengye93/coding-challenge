import React from 'react';

const SearchList = (props) => {
    
    return (
        <form onSubmit={props.handleSearch} >
            <input type ="text"  name="searchInput" placeholder="search restaurant" />
            <select name="category">
                <option value="All">All</option>
                {props.categories.map((category)=> {
                    return <option value={category}>{category}</option>
                })}
          
            </select>
            <input type="submit" value="search" onSubmit={props.handleSearch}/>
        </form>
    )
}

export default SearchList;