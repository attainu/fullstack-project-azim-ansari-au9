import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './adminpannel.css';



const UserList = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/admin/getAllUser`)
        .then(res=>{
            console.log(res)
            setUser(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    const changeStatus = (e)=> {
        e.preventDefault();
        if(user.status="Active"){
            return user.status="Inactive"
        }
        fetch();
    }
        
    
    return (
        <div className="container" >
        <div className="row bootstrap snippets bootdeys"> 
            <div className="col-md-9 col-sm-7"> 
                <h2>Users </h2> 
            </div> 
            <div className="col-md-3 col-sm-5"> 
                <form method="get" role="form" className="search-form-full"> 
                    <div className="form-group"> 
                        <input type="text" className="form-control" name="s" id="search-input" placeholder="Search..." /> 
                        <i className="entypo-search"></i> 
                    </div> 
                </form> 
            </div> 
        </div>
        <ul className="items" style={{listStyle:"none"}}>
            {user.map(user=>(
            <li key={user.id} className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-rounded" alt="profilePic"/> 
                    <i className="fa fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <div className="row info-list col-md-12"> 
                        <li key={user.id} className="col-sm-2"> 
                            <h5> name </h5> 
                            <h6>{user.name}</h6>
                        </li> 
                        <li className="col-sm-3">
                            <h5>email</h5>
                            <h6>{user.email}</h6> 
                        </li> 
                        <li className="col-sm-3"> 
                            <h5>dob</h5> 
                            <h6>{user.dob}</h6> 
                        </li> 
                        <li className="col-sm-2"> 
                            <h5>Status</h5> 
                            <h6>{user.status}</h6>
                        </li> 
                        <li className="col-sm-2"> 
                            <h5>Edit status</h5> 
                            <h6><button onClick={changeStatus}>{user.status}</button></h6>
                        </li> 
                        
                    </div> 
                </div> 
        </li>
        )
        )}
        </ul>
    </div>
    )
}

export default UserList;
