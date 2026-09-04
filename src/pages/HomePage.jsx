import CategoryCard from '../components/CategoryCard'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import useFetch from '../hooks/useFetch'

const recipeCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

function HomePage() {
  const { data, loading, error } = useFetch(recipeCategoriesUrl)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const categories = data?.categories || []

  return (
    <section>
      <div className="hero">
        <p className="eyebrow">Easy recipe search</p>
        <h1>Find a Recipe</h1>
        <p>
          Choose a category, search for a meal, and save the recipes you want
          to try later.
        </p>
      </div>

      <div className="section-heading">
        <h2>Categories</h2>
        <p>{categories.length} options</p>
      </div>

      <div className="card-grid">
        {categories.map((category) => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
