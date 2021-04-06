import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import EditSingleUser from './EditSingleUser';

const EditUser = (props) => {

    const [user, setUser] = useState([])


    useEffect(()=>{
        const fetchData = async() => {
            const id = props.match.params.id;
            await axios.get(`http://localhost:3000/api/admin/getSingleUser/${id}`,{
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            .then(res=>{
                console.log(res.data.userData)
                setUser(res.data.userData)
                console.log("userId",res.data.userData._id)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchData();
    },[])
    return (
        <>
        <Link to='/admin/userList' className='btn btn-sm btn-primary' style={{marginLeft:"80px"}}> Back </Link>
        {/*userDetails  */}
        <div className="row">
                <div className="signup-form">
                    <form className="row form-horizontal">
                    <center> <h1 style={{width:"50vh"}}>User Details</h1> </center>
                            <ul className="row" style={{listStyle:"none"}}>
                            <div class="container col-ml-5">
                                <div class="row">
                                    <div className="col-ml-5">
                                        <li ><img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80" 
                                            alt="profile_pic" 
                                            style={{width:"200px", borderRadius:"20px"}}/>
                                        </li>
                                    </div>
                                    <div className='col'>
                                        <li key={user._id} className="col">Name: {user.name}</li>
                                        <li key={user._id} className="col">Email: {user.email}</li>
                                        <li key={user._id} className="col">Date Of Birth: {user.dob}</li>
                                        <li key={user._id} className="col">Status: {user.status}</li>
                                    </div>
                                            
                                    </div>
                                </div>
                            </ul> 
                    </form>
            </div>
            {/* update user */}
            <div className="col">
            <EditSingleUser user={user} id={user._id}/>
            </div>
        </div>
        </>
    )
}

export default EditUser;
