import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import Form from "./Form"

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")

  const handleFetchedListings = (fetchedListings) => {
    setListings(fetchedListings)
  }
  const handleDeleteListing = (selectedListing) => {
    const updatedListings = listings.filter(
      (listing) => listing.id !== selectedListing.id
    )
    setListings(updatedListings)
  }

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSort = () => {
    const sortedListings = [...listings].sort((a, b) => {
      return a.location.localeCompare(b.location)
    })
    setListings(sortedListings)
  }

  const handleNewListing = (newListing) => {
    const updatedListings = {...listings, newListing}
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header
        onSort={handleSort}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Form
        onAddNewListing={handleNewListing}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        location={location}
        setLocation={setLocation}
      />
      <ListingsContainer
        listings={filteredListings}
        onListingsFetch={handleFetchedListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  )
}

export default App
