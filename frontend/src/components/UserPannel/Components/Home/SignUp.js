import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from './UserNavbar'

const SignUp = () => {

    const [value, setValue] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
    })
    const {name,email, password, error} = value

    const handleChange = name => e => {
        setValue({...value,error: false, [name]:e.target.value})
        
    }

    const signup = (user)=>{
        return fetch(`http://localhost:3000/api/signup`,{
            method:"POST",
            headers: {
                'Accept':"Application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response=> {
            return response.json();
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setValue({...value, error: false})
        signup({name,email,password})
        .then(data=>{
            if(data.errorCode !== 200) {
                setValue({...value,error:data.errors})
            }
            else if(data.errorCode === 200){
                setValue({...value,error:data.message})
            }
            else {
                setValue({
                    ...value,
                    name:'',
                    email:'',
                    password:'',
                    error:''
                })
            }

        })
    }

    const showError = () => (
        <div className='alert alert-info ' style={{display: error ? '' : 'none',margin:"20px"}}>
            <center>{error}</center>
            {console.log(error)}
        </div>
    )

    const signUpForm =() => (
        <div className="wrapper">
            <form className="form-signin" onSubmit={submitHandle}>       
            <h2 className="form-signin-heading" style={{color:"black"}}>User Registration</h2><br />
            <input type="name" className="form-control" name="name" 
                placeholder="Enter Name" required 
                onChange={handleChange("name")} 
                autoFocus="" 
                value={name}/>
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
            </label><br />
            <button className="btn btn-lg btn-info "type="submit"  >Register</button> 
            <div>
                <h5>Already a user please<Link to='/login'> 
                <button>Login</button></Link></h5>    
            </div>  
            </form>
        </div>
            )

    return (
        <>
        <UserNavbar />
        {showError()}
        {signUpForm()}
        </>
    )
}

export default SignUp;
