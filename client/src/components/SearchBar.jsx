import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="pa1">
            <form onSubmit={props.handleSearch} >
                <input type ="text"  name="search_input" placeholder="search restaurant" />
                <input type="submit" value="search" onSubmit={props.handleSearch}/>
            </form>
        </div>
     
    )
}

export default SearchBar;