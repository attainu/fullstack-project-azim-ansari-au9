import React from "react";
import { Link } from "react-router-dom";
import './adminpannel.css';
import logo from './images/logo.png'


const Navbar = () => {
  return (
    <>
    <div className="navb">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"> 
        <img src={logo} alt="logo" style={{borderRadius:'80px'}}/> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" >
          <span className="navbar-toggler-icon" style={{color:'white'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto link">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mutualfunds">
                Mutual Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userlist">
                UserList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
