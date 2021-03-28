import {useState} from 'react';
import { Redirect} from 'react-router-dom';
import {authenticate, login} from './auth/index';


const Login = () => {

    const [values, setValue] = useState({
        email:"admin@gmail.com",
        password:"123456",
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
        login({email, password}).then(data=>{
            console.log(data)
            if(data.error) {
                setValue({...values, error: data.error, loading: false,redirectToReferrer: false});

            } else{
                authenticate(
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
        <form>
            <center>
            <div className="form=group col-md-6">
                <label className="text-muted">email</label>
                <input required onChange={handleChange("email")} type="email"
                    className="form-control"
                    value={email} 
                    />
            </div>
            <div className="form=group col-md-6">
                <label className="text-muted">Password</label>
                <input required onChange={handleChange("password")} type="password"
                    className="form-control"
                    value={password} required
                    />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Login 
            </button>

            </center>
        </form>
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
        <div>
            <h2>login</h2>
            {showError()}
            {showLoading()}
            {loginForm()}
            {redirectAdmin()}
        </div>
    )
}

export default Login;
