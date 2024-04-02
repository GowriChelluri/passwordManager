import './index.css'
import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import AllPasswords from '../AllPasswords'

class PasswordManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <PasswordItem />
        <AllPasswords />
      </div>
    )
  }
}
export default PasswordManager
