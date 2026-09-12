import { Link, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'
import Spinner from '../components/Spinner'
import useFetch from '../hooks/useFetch'

function CategoryPage() {
  const { categoryName } = useParams()
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`
  const { data, loading, error } = useFetch(url)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const recipes = data?.meals || []

  return (
    <section>
      <Link className="back-link" to="/">
        ← Back
      </Link>

      <h1>{categoryName} Recipes</h1>
      <p>{recipes.length} recipes found</p>

      {recipes.length > 0 ? (
        <div className="card-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No recipes found</h2>
          <p>Try another category.</p>
        </div>
      )}
    </section>
  )
}

export default CategoryPage
