import React from "react"

function Form({onAddListing}) {
  return (
    <form className="new-form">
      <div>
        <input className="new-item" placeholder="Description..." />
        <input className="new-item" placeholder="Location..." />
        <input className="new-item" placeholder="Image URL..." />
        <button onClick={onAddListing} className="new">
          Add New Listing
        </button>
      </div>
    </form>
  )
}

export default Form
