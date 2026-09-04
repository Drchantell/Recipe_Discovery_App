import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  return (
    <article className="card category-card">
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <div className="card-content">
        <h2>{category.strCategory}</h2>
        <p>{category.strCategoryDescription.slice(0, 120)}...</p>
        <Link
          className="button-link"
          to={`/category/${encodeURIComponent(category.strCategory)}`}
        >
          View {category.strCategory}
        </Link>
      </div>
    </article>
  )
}

export default CategoryCard
