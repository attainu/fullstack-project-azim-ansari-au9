import {Link} from 'react-router-dom';
import React from 'react'
import "./errorpage.css";

const ErrorPage = () => {
    return (
        <div>
            <div id="main">
    	        <div class="fof">
        		    <h1>Error 404</h1>
                    <p>Page Not Found </p>
                    <button><Link to='/'>Home</Link></button>  
    	        </div>
            </div>
        </div>
    )
}

export default ErrorPage
