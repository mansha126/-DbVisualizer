import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://www.kindpng.com/picc/m/752-7524489_data-analytics-logo-png-transparent-png.png" width="30px" /> DataBase
          Visualization
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="id" style={{ paddingLeft: "50%" }}>
            <li className="nav-item active">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/loginin">
                Login
              </NavLink>
            </li>
            <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/addshow">
                AddShow
              </NavLink>
            </li>
            <li className="nav-item active" style={{ paddingLeft: "6%" }}>
              <NavLink className="nav-link" to="/showmanager">
                Manage
              </NavLink>
            </li>
          </ul>
          {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    </div>
  )
}

export default Header
