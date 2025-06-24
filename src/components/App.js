import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import Form from "./Form"

function App() {
  const [listings, setListings] = useState([])

  const handleFetchedListings = (fetchedListings) => {
    setListings(fetchedListings)
  }

  const handleDeleteListing = (selectedListing) => {
    const updatedListings = listings.filter(
      (listing) => listing.id !== selectedListing.id
    )
    setListings(updatedListings)
  }

  const handleSearch = (results) => {
    setListings(results)
  }

  const handleSort = () => {
    const sortedListings = [...listings].sort((a, b) => {
      const listingA = a.location
      const listingB = b.location
      if (listingA < listingB) return -1
      if (listingA > listingB) return 1
      return 0
    })

    setListings(sortedListings)
  }

  const handleForm = (formData) => {
    console.log(formData)
  }

  return (
    <div className="app">
      <Header listings={listings} onSearch={handleSearch} onSort={handleSort} />
      <Form onAddListing={handleForm} />
      <ListingsContainer
        listings={listings}
        onListingsFetch={handleFetchedListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  )
}

export default App
