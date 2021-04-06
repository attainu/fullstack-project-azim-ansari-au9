import React, { Component } from 'react';
import '../adminpannel.css';
import axios from 'axios';


export class AddMutualFunds extends Component {

    constructor(props){
        super(props)

        this.state = {
            Scheme_Code: "",
            Scheme_Name: "",
            Mutual_Fund_Family: "",
            Scheme_Type: "",
            Scheme_Category: "",
            Net_Asset_Value:""
        }
    }

    changHandler =(e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/api/createMutualFunds`, this.state,{
            headers:{
                'token': localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {

        const {Scheme_Code, Scheme_Name, Mutual_Fund_Family, Scheme_Type, Scheme_Category,Net_Asset_Value} = this.state;

        return (
            <>
            <div>
                <div className="signup-form">
                <center>
                    <h1 style={{width:"50vh",color:"red"}}>Add MutualFunds</h1>
                    </center><hr style={{width:"10vh",color:"red",height:"2px", paddingRight:"100px"}}/>
                <form action="" method="post" className="form-horizontal" onSubmit={this.submitHandler}>
                    <div className="col-xs-8 col-xs-offset-4">
                        <h2>Create Mutual Funds</h2>
                    </div>		
                    <div className="form-group">
                        <label className="control-label col-xs-4">Scheme_Code</label>
                        <div className="col-xs-8">
                            <input type="text" className="form-control" name="Scheme_Code" required="required" onChange={this.changHandler}  value={Scheme_Code}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-4">Scheme_Name</label>
                        <div className="col-xs-8">
                            <input type="Scheme_Name" className="form-control" name="Scheme_Name" required="required" onChange={this.changHandler} value={Scheme_Name}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-4">Mutual_Fund_Family</label>
                        <div className="col-xs-8">
                            <input type="Mutual_Fund_Family" className="form-control" name="Mutual_Fund_Family" required="required" onChange={this.changHandler} value={Mutual_Fund_Family}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-4">Scheme_Type</label>
                        <div className="col-xs-8">
                            <input type="Scheme_Type" className="form-control" name="Scheme_Type" required="required" onChange={this.changHandler} value={Scheme_Type}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-4">Net_Asset_Value</label>
                        <div className="col-xs-8">
                            <input type="number" className="form-control" name="Net_Asset_Value" required="required" onChange={this.changHandler} value={Net_Asset_Value}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <label className="control-label col-xs-4">Scheme_Category</label>
                        <div className="col-xs-8">
                            <input type="Scheme_Category" className="form-control" name="Scheme_Category" required="required" onChange={this.changHandler} value={Scheme_Category}/>
                        </div>        	
                    </div>
                    <div className="form-group">
                        <div className="col-xs-8 col-xs-offset-4">
                            <center>
                                <button type="submit" className="btn btn-primary btn-sm">Create</button>
                            </center>
                        </div>  
                    </div>		      
                </form>
            </div>
        </div>
        </>
            
        )
    }
}

export default AddMutualFunds;
