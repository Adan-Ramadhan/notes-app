import SearchBar from "./SearchBar";

const Headers = ({handleSearchChange, searchValue}) => {
  return(
    <header className="flex justify-between items-center mb-5 p-3 border border-b">
      <div>
        <h1 className="text-2xl font-Inter font-bold">Notes</h1>
      </div>
      <SearchBar handleSearchChange={handleSearchChange} searchValue={searchValue} />
    </header>
  )
}

export default Headers;