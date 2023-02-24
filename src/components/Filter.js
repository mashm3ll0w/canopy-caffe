import React from "react";

function Filter({handleSearch, filter }) {

  

  return (
    <div className="Filter">
      <input type="text" name="search" 
       filter={filter}
       onChange={handleSearch}
       placeholder="Search..." />
    </div>
  );
}


export default Filter;