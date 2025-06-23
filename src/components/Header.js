import React from "react"
import Search from "./Search"

function Header({listings, searchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} searchTerm={searchTerm} />
    </header>
  )
}

export default Header
