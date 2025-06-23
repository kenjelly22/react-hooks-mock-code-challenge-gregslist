import React from "react"
import Search from "./Search"
// import Sort from "./Sort"

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
        <button onClick={onSort}>Sort by Location</button>
      </div>
    </header>
  )
}

export default Header
