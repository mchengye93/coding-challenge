import React from 'react';

const SearchList = (props) => {
    
    return (
        <div className="pa4-1">
        <form className="bg-light-red mw7 center pa4 br2-ns ba b--black-10" onSubmit={props.handleSearch} >
            <input type ="text"  name="searchInput" placeholder="search restaurant"  />
            <select name="category">
                <option value="All">All</option>
                {props.categories.map((category)=> {
                    return <option value={category}>{category}</option>
                })}
          
            </select>
            <input type="submit" value="search" onSubmit={props.handleSearch}/>
        </form>
        </div>
    )
}

export default SearchList;