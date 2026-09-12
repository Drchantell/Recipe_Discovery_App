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
      <h1 className="main-title">Dr. Chantell's Recipe Finder</h1>
      <p>Browse categories and choose a meal to cook.</p>

      <div className="card-grid">
        {categories.map((category) => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
