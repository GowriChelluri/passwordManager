import './index.css'

const PasswordItem = () => (
  <div className="pm-bg-container">
    <div className="passwords-container">
      <h1 className="heading">Add New Password</h1>
      <form>
        <div className="input-container">
          <div className="icon-container">
            <img
              className="input-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
          </div>

          <input className="input" type="text" placeholder="Enter Website" />
        </div>
        <div className="input-container">
          <div className="icon-container">
            <img
              className="input-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
          </div>

          <input className="input" type="text" placeholder="Enter Username" />
        </div>
        <div className="input-container">
          <div className="icon-container">
            <img
              className="input-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
          </div>

          <input className="input" type="text" placeholder="Enter Password" />
        </div>
      </form>
      <div className="btn-container">
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
      alt="password manager"
      className="password-manager-img"
    />
  </div>
)
export default PasswordItem
