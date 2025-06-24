import React from "react"

function Form({onAddListing}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("click")
  }

  return (
    <form className="new-form" onSubmit={handleSubmit}>
      <div>
        <input
          className="new-item"
          type="text"
          id="description"
          placeholder="Description..."
        />
        <input
          className="new-item"
          type="text"
          id="location"
          placeholder="Location..."
        />
        <input
          className="new-item"
          type="text"
          id="image"
          placeholder="Image URL..."
        />
        <button onClick={onAddListing} className="new">
          Add New Listing
        </button>
      </div>
    </form>
  )
}

export default Form
