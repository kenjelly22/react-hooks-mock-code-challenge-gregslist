import React, {useState} from "react"

function ListingCard({onDeleteListing, listing}) {
  const [isActive, setIsActive] = useState()

  const handleFavToggle = () => {
    setIsActive((isActive) => !isActive)
  }

  const handleDeleteClick = () => {
    console.log(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        <button
          onClick={handleFavToggle}
          className={`emoji-button favorite ${isActive ? "active" : ""}`}
        >
          {isActive ? "★" : "☆"}
        </button>
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
