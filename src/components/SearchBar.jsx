import React from "react";

const SearchBar = ({handleSearchChange, searchValue}) => {
  console.log(searchValue)
    return (
      <form>
        <input type="text" onChange={handleSearchChange} value={searchValue} placeholder="Cari catatan..." className="border rounded px-2 py-1" />
      </form>
    );
  
}

export default SearchBar;
