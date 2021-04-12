import React from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import './footer.css';
import logo from '../Images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="footer" style={{margin:"0px",paddingLeft:"15px"}}>
                <Router>
                <div className="footer__addr">
                    <h1 className="footer__logo"><img src={logo} alt="logo" /></h1>
                    <h2 style={{color:"gray", fontSize:"50px", margin:"0px"}}>Contact</h2>
                    <address>
                    Oath Study D29 <br />
                    Jharoda Majra Burari<br />
                    New Delhi 110084
                    <Link className="footer__btn" to="mailto:azimpanjwar@gmail.com">Email Us</Link>
                    </address>
                </div>
                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Resource</h2>
                            <ul className="nav__ul">
                                <li> <Link to="#">Online</Link>
                                <p>We Can go trhough Online Process</p> </li>
                                <li>
                                    <Link to="#">Print</Link>
                                </li> 
                                <li> <Link to="#">Alternative Ads</Link> </li>
                            </ul>
                    </li> 
                    <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">INFORMATION</h2>
                    <ul className="nav__ul nav__ul--extra">
                        <li>
                            <Link to="#">Mutual Funds</Link>
                        </li> 
                        <li>
                            <Link to="#">Privios Details</Link>
                        </li>
                        <li>
                        <Link to="#">Current Details </Link>
                        </li>
                        <li>
                            <Link to="#">Automation</Link>
                        </li>
                        <li>
                        <Link to="#">Artificial Intelligence</Link>
                        </li>
                        <li>
                        <Link to="#">IoT</Link>
                        </li>
                    </ul>
                    </li>
                    <li className="nav__item">
                    <h2 className="nav__title">Terms and Condtion</h2>
                    <ul className="nav__ul">
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="#">Sitemap</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                
                <div className="legal">
                    <p>&copy; 2019 Something. All rights reserved.</p>
                    <div className="legal__links">
                    <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                    </div>
                </div>
                </Router>
                <center>

                </center>
        </div>
        </div>
    )
}

export default Footer
