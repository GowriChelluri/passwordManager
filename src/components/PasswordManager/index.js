import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    showPassword: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onDeletePasswordItem = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({passwordsList: filteredPasswordsList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchInput = () => {
    const {passwordsList, searchInput} = this.state
    return passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onAddNewPassword = event => {
    const {website, username, password} = this.state
    event.preventDefault()
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {passwordsList, showPassword} = this.state
    const filteredPasswordsList = this.getSearchInput()
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />

        <div className="pm-bg-container">
          <div className="passwords-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onAddNewPassword}>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>

                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>

                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>

                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>

              <div className="btn-container">
                <button
                  type="submit"
                  className="btn"
                  onClick={this.onAddNewPassword}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="passwords-bg-container ">
          <div className="top-container">
            <div className="heading-container">
              <h1 className="passwords-heading">Your Passwords</h1>
              <p className="count-btn">{passwordsList.length}</p>
            </div>
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  className="input-icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </div>
              <input
                className="input"
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="check-box-container">
            <input
              type="checkbox"
              id="show-passwords"
              onChange={this.onChangeShowPassword}
            />
            <label htmlFor="show-passwords" className="label">
              Show Passwords
            </label>
          </div>
          {filteredPasswordsList.length !== 0 ? (
            <ul className="each-password-container">
              {filteredPasswordsList.map(eachItem => (
                <PasswordItem
                  passwordDetails={eachItem}
                  onDeletePasswordItem={this.onDeletePasswordItem}
                  showPassword={showPassword}
                  key={eachItem.id}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="passwords-heading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
