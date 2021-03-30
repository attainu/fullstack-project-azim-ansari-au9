import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import EditSingleUser from './EditSingleUser';

const EditUser = (props) => {

    const [user, setUser] = useState([])


    useEffect(async()=>{
        const id = await props.match.params.id;
        await axios.get(`http://localhost:3000/api/admin/getSingleUser/${id}`,{
            headers:{
                'token': localStorage.getItem('token')
            }
        })
            .then(res=>{
                console.log(res.data.userData)
                setUser(res.data.userData)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    return (
        <>
        <Link to='/userList' className='btn btn-primary' style={{marginLeft:"80px"}}> Back </Link>
        {/*userDetails  */}
        <div className="row">
            <div className="col">
                <div className="signup-form">
                    <center> <h1 style={{width:"50vh",color:"red"}}>User Details</h1> </center>
                        <form className="row form-horizontal"/* onSubmit={this.submitHandler}*/>
                                <ul className="row-md-12" style={{listStyle:"none"}}>
                                    <li className="col-md-6"><img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80" 
                                    alt="profile_pic" 
                                    style={{height:"90px", borderRadius:"20px",border:"2px solid black",padding:"10px"}}/></li>
                                    <li key={user.id} className="row-md-6">Name: {user.name}</li>
                                    <li className="row-md-6">Email: {user.email}</li>
                                    <li className="row-md-6">Date Of Birth: {user.dob}</li>
                                    <li className="row-md-6">Status: {user.status}</li>
                                </ul> 
                        </form>
                </div>
            </div>
            {/* update user */}
            <div className="col">
            <EditSingleUser />
            </div>
        </div>
        </>
    )
}

export default EditUser;
