import React from "react"
import Search from "./Search"

function Header({listings, onSearch, onSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onSearch={onSearch} />
      <div>
        <button onClick={onSort} className="sort">
          Sort by Location
        </button>
      </div>
      <div>
        <button className="new">Create New Listing</button>
      </div>
    </header>
  )
}

export default Header
