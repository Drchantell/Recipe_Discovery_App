import { Link, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import { useFavorites } from '../context/FavoritesContext'
import useFetch from '../hooks/useFetch'

function RecipeDetailPage() {
  const { recipeId } = useParams()
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  const { data, loading, error } = useFetch(url)
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const recipe = data?.meals?.[0]

  if (!recipe) {
    return (
      <div className="empty-state">
        <h1>Recipe not found</h1>
        <Link className="button-link" to="/">
          Return Home
        </Link>
      </div>
    )
  }

  const ingredients = []

  for (let number = 1; number <= 20; number += 1) {
    const ingredient = recipe[`strIngredient${number}`]
    const measure = recipe[`strMeasure${number}`]

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() || ''} ${ingredient.trim()}`.trim())
    }
  }

  const favorite = isFavorite(recipe.idMeal)

  function handleFavorite() {
    if (favorite) {
      removeFavorite(recipe.idMeal)
    } else {
      addFavorite(recipe.idMeal)
    }
  }

  return (
    <article className="recipe-detail">
      <Link className="back-link" to={`/category/${encodeURIComponent(recipe.strCategory)}`}>
        ← Back to {recipe.strCategory}
      </Link>

      <div className="recipe-detail-grid">
        <img className="detail-image" src={recipe.strMealThumb} alt={recipe.strMeal} />

        <div className="detail-copy">
          <p className="eyebrow">{recipe.strArea} • {recipe.strCategory}</p>
          <h1>{recipe.strMeal}</h1>
          <button className="favorite-button" type="button" onClick={handleFavorite}>
            {favorite ? 'Remove Favorite' : 'Save Favorite'}
          </button>

          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="instructions-section">
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </section>
    </article>
  )
}

export default RecipeDetailPage
