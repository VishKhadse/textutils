import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    console.log("Received prop:", props)
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">{props.title}</Link>  
    
        {/* Navbar Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        {/* Navbar Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          {/* Left-side Navbar Links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0 ms-auto d-flex" >
            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
    
          {/* Right-side Content */}
          <div className="d-flex align-items-center">
            {/* Theme Color Options */}
            <div className="d-flex">  {/* //multiple background changes assignmnet solution */}
              <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode1('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode1('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode1('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
              <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode1('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div>
    
            {/* Dark Mode Toggle */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-3`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };

  //npm install react-router-dom