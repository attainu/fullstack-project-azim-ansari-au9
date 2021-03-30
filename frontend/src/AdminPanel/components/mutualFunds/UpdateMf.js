import React, { useState , useEffect} from 'react';
import '../adminpannel.css';
import {Link} from 'react-router-dom';
import SingleMutualFund from './SingleMutualFund';
import axios from 'axios';

const UpdateMf = (props) => {

    const[mf, setMf] = useState([])

    useEffect(async()=>{
        const id = await props.match.params.id;
        await axios.get(`http://localhost:3000/api/singleMutualFund/${id}`,{
            headers:{
                'token': localStorage.getItem('token')
            }
        })
            .then(res=>{
                setMf(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])


    return (<>
        <Link to='/mutualfunds' className='btn btn-primary' style={{marginLeft:"80px"}}> Back </Link>
        <div className="row">
            <div className="col">
                <div className="signup-form">
                    <center> <h1 style={{width:"50vh",color:"red"}}>Mutual Fund Details</h1> </center>
                        <form className="row form-horizontal"/* onSubmit={this.submitHandler}*/>                        
                                <ul className="row-md-12" style={{listStyle:"none"}}>    
                                    <li key={mf.id} className="row-md-6">M.F Name:<span style={{color:'black',marginLeft:"70px"}}>{mf.Mutual_Fund_Family}</span></li>
                                    <li key={mf.id} className="row-md-6">Asset_Value: <span style={{color:'black',marginLeft:"45px"}}>{mf.Net_Asset_Value}</span></li>
                                    <li key={mf.id} className="row-md-6">Category: <span style={{color:'black',marginLeft:"70px"}}>{mf.Scheme_Category}</span></li>
                                    <li key={mf.id} className="row-md-6">Scheme Code: <span style={{color:'black',marginLeft:"38px"}}>{mf.Scheme_Code}</span>    </li>
                                    <li key={mf.id} className="row-md-6">Scheme Name:<span style={{color:'black',marginLeft:"36px"}}>{mf.Scheme_Name}</span> </li>
                                    <li key={mf.id} className="row-md-6">Scheme Type:<span style={{color:'black',marginLeft:"40px"}}>{mf.Scheme_Type} </span></li>
                                </ul> 
                        </form>
                </div>
            </div>
            {/* update MFunds */}
            <div className="col">
            <SingleMutualFund />
            </div>
        </div>
        
    </>

    )
}

export default UpdateMf;
