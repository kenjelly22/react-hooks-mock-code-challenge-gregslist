import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

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

  return (
    <div className="app">
      <Header listings={listings} />
      <ListingsContainer
        listings={listings}
        onListingsFetch={handleFetchedListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  )
}

export default App
