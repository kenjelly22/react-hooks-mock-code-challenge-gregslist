import React from "react"

function Sort({onSort}) {
  return (
    <div>
      <button onClick={onSort}>Sort by Location</button>
    </div>
  )
}

export default Sort
