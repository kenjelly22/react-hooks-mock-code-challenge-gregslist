import React from "react"

function Form({
  onAddNewListing,
  description,
  setDescription,
  image,
  setImage,
  location,
  setLocation,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      description: description,
      image: image,
      location: location,
    }
    onAddNewListing(formData)
  }

  return (
    <form className="new-form" onSubmit={handleSubmit}>
      <div>
        <input
          className="new-item"
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="new-item"
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="new-item"
          type="text"
          placeholder="Image URL..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className="new">
          Add New Listing
        </button>
      </div>
    </form>
  )
}

export default Form
