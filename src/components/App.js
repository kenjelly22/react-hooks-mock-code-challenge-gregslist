import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  const handleFetchedListings = (fetchedListings) => {
    setListings(fetchedListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        listings={listings}
        onListingsFetch={handleFetchedListings}
      />
    </div>
  )
}

export default App
