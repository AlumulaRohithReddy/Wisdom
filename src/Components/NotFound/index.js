import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://static.vecteezy.com/system/resources/previews/026/766/386/non_2x/search-no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="p">No User Found</h1>
    <p className="p">
    We could not found any user.Try other names.
    </p>
  </div>
)

export default NotFound
