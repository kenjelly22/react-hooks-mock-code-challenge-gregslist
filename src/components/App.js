import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  const handleFetchedListings = (fetchedListings) => {
    setListings(fetchedListings)
  }

  const handleDeleteListing = () => {
    console.log(listings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        listings={listings}
        onListingsFetch={handleFetchedListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  )
}

export default App
