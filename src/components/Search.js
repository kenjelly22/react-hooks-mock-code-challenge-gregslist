import React, {useState} from "react"

function Search({listings, onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const filtered = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    onSearch(filtered)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
