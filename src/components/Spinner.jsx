function Spinner() {
  return (
    <div className="status-box" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true"></div>
      <p>Loading delicious recipes...</p>
    </div>
  )
}

export default Spinner
