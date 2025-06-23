import React, {useState, useEffect} from "react"

function Search({listings}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredListings, setFilteredListings] = useState([])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = listings.filter(
      (listing) => listing.description === searchTerm
    )
    setFilteredListings(result)
    console.log(result)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
