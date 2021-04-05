import React, { useState , useEffect} from 'react';
import '../adminpannel.css';
import {Link,useHistory} from 'react-router-dom';
import SingleMutualFund from './SingleMutualFund';
import axios from 'axios';

const UpdateMf = (props) => {
    let history = useHistory()
    const[mf, setMf] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
            const id = props.match.params.id;
            await axios.get(`http://localhost:3000/api/singleMutualFund/${id}`,{
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            .then(res=>{
                console.log("ksjdfsdhb",res.data.data)
                console.log("mffffffffffffffffffff",mf)
                setMf(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchData();
    },[])
    function deleteMf(e){
        e.preventDefault();
        const dataFetch = async() => {
        const id = props.match.params.id;
        await axios.delete(`http://localhost:3000/api/removeMutualFund/${id}`,{
            headers:{
                'token': localStorage.getItem('token')
            }
        }).then((result)=>{
            // console.log(result,"asjdbjsjjjjjjjjjjjjjjjjjjjjjj")
            history.push('/admin/mutualfunds')
        }).catch((err) => console.log(err))
        }
        dataFetch();

    }

    return (<>
        <Link to='/admin/mutualfunds' className='btn btn-primary' style={{marginLeft:"80px"}}> Back </Link>
        <div className="row">
            <div className="col">
                <div className="signup-form">
                        <form className="row form-horizontal" onSubmit={deleteMf}>  
                        <div className="col-xs-8 col-xs-offset-4"> <h2>Mutual Funds Details</h2></div>                      
                            <ul className="row-md-12" style={{listStyle:"none"}}>    
                                <li key={mf._id} className="row-md-6">M.F Name:<span style={{color:'black',marginLeft:"70px"}}>{mf.Mutual_Fund_Family}</span></li>
                                <li key={mf._id} className="row-md-6">Asset_Value: <span style={{color:'black',marginLeft:"45px"}}>{mf.Net_Asset_Value}</span></li>
                                <li key={mf._id} className="row-md-6">Category: <span style={{color:'black',marginLeft:"70px"}}>{mf.Scheme_Category}</span></li>
                                <li key={mf._id} className="row-md-6">Scheme Code: <span style={{color:'black',marginLeft:"38px"}}>{mf.Scheme_Code}</span>    </li>
                                <li key={mf._id} className="row-md-6">Scheme Name:<span style={{color:'black',marginLeft:"36px"}}>{mf.Scheme_Name}</span> </li>
                                <li key={mf._id} className="row-md-6">Scheme Type:<span style={{color:'black',marginLeft:"40px"}}>{mf.Scheme_Type} </span></li>
                            </ul> 
                            <button className="btn btn-delete" type='submit'>Remove </button>
                        </form>
                </div>
            </div>
            {/* update MFunds */}
            <div className="col">
            <SingleMutualFund id={props.match.params.id} mf={mf}/>
            </div>
        </div>
        
    </>

    )
}

export default UpdateMf;
