import React from "react";

class SearchBar extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      searchTitle: ""
    }
  
  this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  

  handleSearchChange(event){
    this.setState(() => {
      return{
        searchTitle: event.target.value
      }
    })
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleSearchChange} value={this.state.searchTitle} placeholder="Cari catatan..." className="border rounded px-2 py-1" />
      </form>
    );
  }
}

export default SearchBar;
