import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePasswordItem, showPassword} = props
  const {website, username, password, id} = passwordDetails
  const onClickDelete = () => {
    onDeletePasswordItem(id)
  }

  const passwordText = showPassword ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  return (
    <li>
      <div className="password-container">
        <button type="button" className="profile-logo">
          {website[0].toUpperCase()}
        </button>
        <div className="name-password-container">
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {passwordText}
        </div>
        <button type="button" className="delete-btn" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
