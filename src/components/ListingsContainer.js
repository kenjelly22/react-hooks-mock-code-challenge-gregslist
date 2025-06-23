import React, {useEffect} from "react"
// import ListingCard from "./ListingCard";

function ListingsContainer() {
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => console.log(listings))
  })
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  )
}

export default ListingsContainer
