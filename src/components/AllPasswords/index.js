import './index.css'

const AllPasswords = () => (
  <div className="passwords-bg-container ">
    <div className="top-container">
      <div className="heading-container">
        <h1 className="passwords-heading">Your Passwords</h1>
        <button type="button" className="count-btn">
          0
        </button>
      </div>
      <div className="search-container">
        <div className="search-icon-container">
          <img
            className="input-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
        </div>
        <input className="input" type="text" placeholder="Enter Password" />
      </div>
    </div>
  </div>
)
export default AllPasswords
