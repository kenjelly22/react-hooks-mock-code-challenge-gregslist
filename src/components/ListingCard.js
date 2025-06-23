import React, {useState} from "react"

function ListingCard() {
  const [isActive, setIsActive] = useState()

  const handleFavToggle = () => {
    setIsActive((isActive) => !isActive)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  )
}

export default ListingCard
