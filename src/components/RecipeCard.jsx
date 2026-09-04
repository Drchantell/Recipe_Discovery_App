import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
  return (
    <article className="card recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="card-content">
        <h2>{recipe.strMeal}</h2>
        <Link className="button-link" to={`/recipe/${recipe.idMeal}`}>
          See Recipe
        </Link>
      </div>
    </article>
  )
}

export default RecipeCard
