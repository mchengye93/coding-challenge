import React from 'react';

const YelpSearchBar = (props) => {
    return (
        <div className="pa4">
            <form onSubmit={props.handleSearch} >
                <input className="pa3" type ="text"  name="search_input" placeholder="Search for Restaurant" />
                <input className= "pa3" type="submit" value="search" onSubmit={props.handleSearch}/>
            </form>
        </div>
     
    )
}

export default YelpSearchBar;