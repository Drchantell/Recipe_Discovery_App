import { Link } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'
import Spinner from '../components/Spinner'
import { useFavorites } from '../context/FavoritesContext'
import useFetch from '../hooks/useFetch'

function SavedRecipe({ recipeId }) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  const { data, loading, error } = useFetch(url)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const recipe = data?.meals?.[0]

  if (!recipe) return null

  return <RecipeCard recipe={recipe} />
}

function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Saved meals</p>
          <h1>Favorites</h1>
        </div>
        <p>{favorites.length} saved</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>
          <p>Pick a recipe and save it here.</p>
          <Link className="button-link" to="/">
            Find Recipes
          </Link>
        </div>
      ) : (
        <div className="card-grid">
          {favorites.map((recipeId) => (
            <SavedRecipe key={recipeId} recipeId={recipeId} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FavoritesPage
