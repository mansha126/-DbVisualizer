import { red } from '@mui/material/colors'
import React from 'react'

const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"style={{color:"#000000"}}>Database  Visiualizer
      {/* <img src='image.png' alt=''/> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav "style={{marginLeft:'50%'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"style={{color:"#000000"}}>Home</a>
        </li>
        <li className="nav-item" style={{paddingLeft:'10%'}}>
          <a className="nav-link" href="loginin" style={{color:"#000000"}}>Loginin</a>
        </li>

        <li className="nav-item" style={{paddingLeft:'10%'}}>
          <a className="nav-link" href="dashboard" style={{color:"#000000"}}>Dashboard</a>
        </li>

        <li className="nav-item" style={{paddingLeft:'10%'}}>
          <a className="nav-link" href="signup" style={{color:"#000000"}}>Signup</a>
        </li>

        <li className="nav-item" style={{paddingLeft:'10%'}}>
          <a className="nav-link" href="addshow"style={{color:"#000000"}}>addShow</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
  
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Header