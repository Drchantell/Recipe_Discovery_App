import { useSearchParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'
import Spinner from '../components/Spinner'
import useFetch from '../hooks/useFetch'

function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')?.trim() || ''
  const url = query
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    : null
  const { data, loading, error } = useFetch(url)

  if (!query) {
    return (
      <div className="empty-state">
        <h1>Search</h1>
        <p>Use the search bar to look for a recipe.</p>
      </div>
    )
  }

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const recipeResults = data?.meals || []

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Search results</p>
          <h1>Results for {query}</h1>
        </div>
        <p>{recipeResults.length} found</p>
      </div>

      {recipeResults.length > 0 ? (
        <div className="card-grid">
          {recipeResults.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No recipes found</h2>
          <p>Try a different recipe name.</p>
        </div>
      )}
    </section>
  )
}

export default SearchPage
