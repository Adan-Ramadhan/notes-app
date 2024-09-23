import SearchBar from "./SearchBar";

const Headers = () => {
  return(
    <header className="flex justify-between items-center mb-5 p-3 border border-b">
      <div>
        <h1 className="text-2xl font-Inter font-bold">Notes</h1>
      </div>
      <SearchBar/>
    </header>
  )
}

export default Headers;