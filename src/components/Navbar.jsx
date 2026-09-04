import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const { favorites } = useFavorites()

  function handleSearch(event) {
    event.preventDefault()
    const cleanSearch = searchTerm.trim()

    if (cleanSearch) {
      navigate(`/search?query=${encodeURIComponent(cleanSearch)}`)
      setSearchTerm('')
    }
  }

  return (
    <header className="navbar">
      <div className="nav-content">
        <Link className="brand" to="/">
          Recipe Finder
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Saved ({favorites.length})</NavLink>
        </nav>

        <form className="search-form" onSubmit={handleSearch}>
          <label className="sr-only" htmlFor="recipe-search">
            Search recipes by name
          </label>
          <input
            id="recipe-search"
            type="search"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  )
}

export default Navbar
