import React ,{useState} from 'react';
import axios from 'axios';


const EditSingleUser = (props) => {
    
    const [value, setValue] = useState(props.user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [status, setStatus] = useState(false)
    const [profilePic, setsetProfilePic] = useState('')

    function updateUser (e) {
        e.preventDefault();
        const id = props.id;
        const data = {
            ...value,
            "name":name,
            "email":email,
            "status":status,
            "dob":dob,
            "profilePic":profilePic
        }
        const fetchData = async(e) => {
            e.preventDefault();
            await axios.put(`http://localhost:3000/api/admin/editProfile/${id}`,data,{
                headers:{
                    'token': localStorage.getItem('token'),
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                } 
            })
            .then(res=>{
                console.log(res.data.data,"sjkdkkkkkkkkkkk")
                setValue(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            });
        }
        fetchData();
    }

    console.log(status)
    const statusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            <div className="signup-form">
                    <form action="" method="patch" className="form-horizontal" onSubmit={updateUser}>
                        <div className="col-xs-8 col-xs-offset-4">
                            <h2>User Edit profile</h2>
                        </div>		
                        <div className="form-group">
                            <label className="control-label col-xs-4">name</label>
                            <div className="col-xs-8">
                        <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)}  value={name}/>        
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">email</label>
                            <div className="col-xs-8">
                                <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">dob</label>
                            <div className="col-xs-8">
                                <input type="dob" className="form-control" name="dob" onChange={(e)=>setDob(e.target.value)} value={dob}/>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">status</label>
                            <div className="col-xs-8" onChange={statusChange}>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='Active' />
                                    <label className="col-md-6 form-check-label" htmlFor="flexRadioDefault1">  Active  </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='Inactive'/>
                                    <label className="col-md-6 form-check-label" htmlFor="flexRadioDefault2"> Inactive </label>
                                </div>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4 ">Profile_Pic</label>
                            <div className="col-xs-8">
                            <div className="input-group">
                                <div className="custom-file" >
                                    <input type="file" className="custom-file-input " id="inputGroupFile04" onChange={(e)=>setsetProfilePic(e.target.value)} value={profilePic}/>
                                    <label className="custom-file-label " htmlFor="inputGroupFile04">Choose file</label>
                                </div>
                                </div>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <div className="col-xs-8 col-xs-offset-4">
                                <center>
                                    <button type="submit" className="btn btn-primary btn-sm">Update User</button>
                                </center>
                            </div>  
                        </div>		      
                    </form>
                </div>
        </div>
    )
}

export default EditSingleUser;
