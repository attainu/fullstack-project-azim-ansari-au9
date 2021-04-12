import React from "react";
import { Link,useHistory} from "react-router-dom";
import '../adminpannel.css';
import logo from '../images/logo.png'
import {logout, isAuthenticated} from '../auth/index';

const Navbar = () => {
  let history = useHistory();
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
              <Link className="nav-link" to="/admin">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/mutualfunds">
                Mutual Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/userlist">
                UserList
              </Link>
            </li>
            {!isAuthenticated() ?  
              <div>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/login">
                      Login
                    </Link>
                  </li>
              </div> 
              : 
              <li className="nav-item" >
              <span className="nav-link" style={{cursor: 'pointer',color: "white"}}
              onClick={()=>logout(()=>{
                history.push('/')
                // Redirect('/')
              })}>
                logout
              </span>
            </li>
              }
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
