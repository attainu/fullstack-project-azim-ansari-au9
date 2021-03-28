import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './adminpannel.css';


const CreateMutualFunds =() => {

    const [mutualFunds, setMutualFunds] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/getMutualFunds/`)
        .then(res=>{
            console.log(res)
            setMutualFunds(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <>
        <div>
            <div class="signup-form">
                <form action="" method="post" class="form-horizontal">
                    <div class="col-xs-8 col-xs-offset-4">
                        <h2>Create Mutual Funds</h2>
                    </div>		
                    <div class="form-group">
                        <label class="control-label col-xs-4">Scheme_Code</label>
                        <div class="col-xs-8">
                            <input type="text" class="form-control" name="Scheme_Code" required="required" />
                        </div>        	
                    </div>
                    <div class="form-group">
                        <label class="control-label col-xs-4">Scheme_Name</label>
                        <div class="col-xs-8">
                            <input type="Scheme_Name" class="form-control" name="Scheme_Name" required="required" />
                        </div>        	
                    </div>
                    <div class="form-group">
                        <label class="control-label col-xs-4">Mutual_Fund_Family</label>
                        <div class="col-xs-8">
                            <input type="Mutual_Fund_Family" class="form-control" name="Mutual_Fund_Family" required="required" />
                        </div>        	
                    </div>
                    <div class="form-group">
                        <label class="control-label col-xs-4">Scheme_Type</label>
                        <div class="col-xs-8">
                            <input type="Scheme_Type" class="form-control" name="Scheme_Type" required="required" />
                        </div>        	
                    </div>
                    <div class="form-group">
                        <label class="control-label col-xs-4">Scheme_Category</label>
                        <div class="col-xs-8">
                            <input type="Scheme_Category" class="form-control" name="Scheme_Category" required="required" />
                        </div>        	
                    </div>
                    <div class="form-group">
                        <div class="col-xs-8 col-xs-offset-4">
                            <center>
                                <button type="submit" class="btn btn-primary btn-lg">Create</button>
                            </center>
                        </div>  
                    </div>		      
                </form>
            </div>
        </div>
        {/* list of mutual funds */}
        <div class="containerazim ">
            <center><h1 style={{width:"100vh",color:"red"}}>List of all MutualFunds</h1></center><hr style={{width:"100vh",color:"red",height:"2px"}}/>
            <ul className="item" style={{listStyle:"none"}}>
            {mutualFunds.map(mutualFunds=>(
                <div class="row md-2">
                    <div class="col-md-11">
                        <div class="offer offer-success">
                            <div class="shape">
                                <div class="shape-text">
                                    M.F 								
                                </div>
                            </div>
                            <div class="offer-content ">
                                <h3 class="lead m-5"> <a style={{cursor:"pointer", color:"navy"}}>Scheme_Code:{mutualFunds.Scheme_Code}</a> </h3>
                                <div className="info col-lg-10 col-lg-offset-1">
                                    <ul>
                                        <li key={mutualFunds.id} style={{color:"blue"}}>Mutual_Fund_Family:{mutualFunds.Mutual_Fund_Family}</li>
                                        <li key={mutualFunds.id}>Scheme_Type:{mutualFunds.Scheme_Type}</li>
                                        <li key={mutualFunds.id}>Net_Asset_Value:{mutualFunds.Net_Asset_Value}</li>
                                        <li key={mutualFunds.id}>Scheme_Category:{mutualFunds.Scheme_Category}</li>
                                        <li key={mutualFunds.id}>Scheme_Name:{mutualFunds.Scheme_Name}</li>    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </ul>
        </div>
        
                        
        </>
        

    )
}

export default CreateMutualFunds
