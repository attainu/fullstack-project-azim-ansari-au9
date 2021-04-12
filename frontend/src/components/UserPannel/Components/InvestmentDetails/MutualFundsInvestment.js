import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserNavbar from '../Home/UserNavbar';

const MutualFundsInvestment = (props) => {
    let history = useHistory()
    const [data, setData] = useState([])
    const [value, setValue] = useState({
        AmountInvested:'',
        MFId: props.match.params.id,
        error:''
    })

    const {AmountInvested} = value
    const MFId = props.match.params.id; 
    console.log(MFId,"aaaaaaaaaaa")
    const handleChange = name => e => {
        setValue({...value,error: false, [name]:e.target.value})
        
    }
    const Investment = (user)=>{
        return fetch(`http://localhost:3000/api/investment`,{
            method:"POST",
            headers: {
                'Accept':"Application/json",
                "Content-Type":"application/json",
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify(user)
        })
        .then(response=> {
            history.push('/mutualfunds')
            return response.json();
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const clickSubmit = (e) => {
        e.preventDefault();
        setValue({...value, error: false})
        Investment({AmountInvested,MFId})
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
                    AmountInvested:'',
                    MFId:'',
                    error:''
                })
            }

        })
    }
    const submitHandle = (e) => {
        e.preventDefault();
        setData(...data)
        Investment({MFId})
        .then(result=>{
            if(data.errorCode !== 200) {
                setValue({...value,error:result.errors})
            }
            else if(data.errorCode === 200){
                setValue({...value,error:result.message})
            }
            else {
                setValue({
                    ...value,
                    MFId:'',
                    error:''
                })
            }
        })
    }
    useEffect(()=>{
    axios.get(`http://localhost:3000/api/userInvestmentDetals`,{
            headers: {
                'Accept':"Application/json",
                "Content-Type":"application/json",
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify()
        })
        .then(res=>{
            console.log(res.data)
            setData(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <>
        <UserNavbar />
        <div className='row'>
            <div className="wrapper col-md-6" style={{width:'500px'}}>
                <form className="form-signin" >       
                <h2 className="form-signin-heading" style={{color:"black"}}>Invest Money</h2><br />
                <input type="text" className="form-control" name="MFId" 
                    placeholder="Enter Above Id Here" required 
                    onChange={handleChange("MFId")} 
                    value={MFId}/>
                <input type="number" className="form-control" name="AmountInvested" 
                    placeholder="Enter Amount Here" required 
                    onChange={handleChange("AmountInvested")} 
                    value={AmountInvested}/>
                <button className="btn btn-sm btn-primary btn-block" type="submit" onClick={clickSubmit} >Invest</button>   
                </form>
            </div>
            <div className='wrapper col-md-6'>
                <form className='form-signin'>
                <center><h1>Details here</h1>
                <input type="text" className="form-control" name="MFId" 
                    placeholder="Enter Above Id Here" required 
                    onChange={handleChange("MFId")} 
                    value={MFId}/>
                <button onClick={submitHandle}> Click here to see details</button></center>

                </form>
            </div>

        </div>
        </>
    )
}

export default MutualFundsInvestment;
