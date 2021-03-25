import React from "react";

const Login =() => {
  return (
    <div className="container mt-5 border">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div className="login-box col-md-12">
                    <form id="login-form" className="form" action="" method="post">
                        <h3 className="text-center text-black">Admin Login</h3>
                        <div className="form-group">
                            <label htmlFor="email" className="text-black">Admin email:</label><br />
                            <input type="text" name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-black">Password:</label><br />
                            <input type="text" name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="remember-me" className="text-black"><span>Remember me</span> 
                            <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                            <center>
                            <input type="submit" name="submit" className="btn center" value="submit" />
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
