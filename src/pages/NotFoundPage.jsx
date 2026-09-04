import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="empty-state">
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button-link" to="/">
        Return Home
      </Link>
    </div>
  )
}

export default NotFoundPage
