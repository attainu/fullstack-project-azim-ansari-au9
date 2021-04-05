import React, { useEffect, useState } from 'react';
import UserNavbar from './UserNavbar';
import axios from 'axios';
import './profile.css'

const UserProfile = () => {

    const [user, setUser] = useState('');

    const profileData = async() => {
            const res = await axios.get(`http://localhost:3000/api/profile`,{
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            .then(res=>{
            console.log(res.data.userDetails.userData)
            setUser(res.data.userDetails.userData)
            })
            .catch (error=> {
                console.log(error)
            })
        }

    useEffect(()=>{
        profileData()
    },[])
    return (
        <div>
            <UserNavbar />
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={user.profilePic} alt="profilePic"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" accept="images/*"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {user.name}
                                    </h5>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{user.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>DOB</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{user.dob}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Status</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{user.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
    )
}

export default UserProfile
