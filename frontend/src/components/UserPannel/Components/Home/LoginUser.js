import React,{useState} from 'react';
import { Redirect} from 'react-router-dom';
import UserNavbar from './UserNavbar';
import {UserAuthenticate, Userlogin } from '../UserAuth';



const LoginUser = () => {

    const [values, setValue] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        redirectToReferrer: false,
    })

    const {email, password, loading, error, redirectToReferrer} = values;

    const handleChange = name =>event=> {
        event.preventDefault();
        setValue({...values, error: false,[name]: event.target.value })
    };
    const clickSubmit = event =>{
        event.preventDefault();
        setValue({...values, error: false, loading: true});
        Userlogin({email, password}).then(data=>{
            console.log(data)
            if(data.errorCode !== 200) {
                setValue({...values, error: data.message, loading: false,redirectToReferrer: false});
            } 
            else{
                UserAuthenticate(
                    data,()=>{
                        setValue({
                            ...values,
                            redirectToReferrer: true
                        })
                    }
                )
            }
        })
    }

    const loginForm =() => (
        <div className="wrapper">
            <form className="form-signin">       
            <h2 className="form-signin-heading" style={{color:"black"}}>User login</h2><br />
            <input type="email" className="form-control" name="email" 
                placeholder="Email Address" required 
                onChange={handleChange("email")} 
                autoFocus="" 
                value={email}/>
            <input type="password" className="form-control" name="password" 
                placeholder="Password" required  
                onChange={handleChange("password")} 
                value={password} />      
            <label className="checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
            </label>
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={clickSubmit} >Login</button>   
            </form>
        </div>
    );

    const showError =() => (
        <div className="alert alert-danger"
        style={{display: error? "" : "none"}} >
            {error}
        </div>
    )
    
    const showLoading =() => (
        loading && (
            <div className="alert alert-info">
                <h2>loading...</h2>
            </div>
        )
    )

    const redirectAdmin = () => {
        if(redirectToReferrer) {
            return <Redirect to='/' />
        }
    }

    return(
        <>
        <UserNavbar />
        <div>
            {showError()}
            {showLoading()}
            {loginForm()}
            {redirectAdmin()}
        </div>
        </>
    )
}

export default LoginUser;
