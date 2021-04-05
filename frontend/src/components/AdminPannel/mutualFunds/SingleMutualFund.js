import axios from 'axios';
import React, {useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleMutualFund = (props) => {
    const [data, setData] =  useState(props.mf)
    const [Scheme_Code, setScheme_Code] = useState(props.mf.Scheme_Code || '')
    const [Scheme_Name, setScheme_Name] = useState('')
    const [Mutual_Fund_Family, setMutual_Fund_family] = useState('')
    const [Scheme_Type, setScheme_Type] = useState('')
    const [Net_Asset_Value, setNet_Asset_Value] = useState('')
    const [Scheme_Category, setScheme_Category] = useState('')

    const UpdateMfunds = (e)=> {
        e.preventDefault();
        const id = props.id
        const newData = {
            ...data,
            "Mutual_Fund_Family": Mutual_Fund_Family,
            "Scheme_Type":Scheme_Type,
            "Net_Asset_Value":Net_Asset_Value,
            "Scheme_Category":Scheme_Category,
            "Scheme_Code":Scheme_Code,
            "Scheme_Name":Scheme_Name
        }
        console.log(newData);
        const fetchData = async() => {
            await axios.post(`http://localhost:3000/api/updateMutalFunds/${id}`,newData,
            {
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },   
            })
            .then(res=>{
                console.log(res.data.message)
                toast.success(res.data.messsage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setData(res)
            })
            .catch(err=>{
                console.log(err)
            })
        };
        fetchData();
    }

    return (
        <div className="signup-form">
        <form className="form-horizontal" onSubmit={UpdateMfunds}>
        <ToastContainer position="bottom-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
                <div className="col-xs-8 col-xs-offset-4">
                    <h2>Edit Mutual Funds</h2>
                </div>		
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Code</label>
                    <div className="col-xs-8">
                        <input type="text" className="form-control" name="Scheme_Code" required="required" onChange={(e)=>setScheme_Code(e.target.value)}  value={props.mf.Scheme_Code}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Name</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Name" className="form-control" name="Scheme_Name" onChange={(e)=>setScheme_Name(e.target.value)} value={Scheme_Name}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Mutual_Fund_Family</label>
                    <div className="col-xs-8">
                        <input type="Mutual_Fund_Family" className="form-control" name="Mutual_Fund_Family" onChange={(e)=>setMutual_Fund_family(e.target.value)} value={Mutual_Fund_Family}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Type</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Type" className="form-control" name="Scheme_Type" onChange={(e)=>setScheme_Type(e.target.value)} value={Scheme_Type}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Net_Asset_Value</label>
                    <div className="col-xs-8">
                        <input type="number" className="form-control" name="Net_Asset_Value" onChange={(e)=>setNet_Asset_Value(e.target.value)} value={Net_Asset_Value}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Category</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Category" className="form-control" name="Scheme_Category" onChange={(e)=>setScheme_Category(e.target.value)} value={Scheme_Category}/>
                    </div>        	
                </div>
                <div className="form-group">
                    <div className="col-xs-8 col-xs-offset-4">
                        <center>
                        <button type="submit" className="btn btn-primary btn-lg">Update</button>
                        </center>
                    </div>  
                </div>		      
            </form>
    </div>
    )
}

export default SingleMutualFund;
