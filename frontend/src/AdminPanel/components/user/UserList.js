import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../adminpannel.css';


const UserList = () => {

    const [user, setUser] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    const userPerPage = 4;
    const pageVisited = pageNum*userPerPage;

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/admin/getAllUser`)
        .then(res=>{
            // console.log(res)
            setUser(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        });
        
    },[])


    const displayData = user.slice(pageVisited,pageVisited+userPerPage)
    .map(user => {
        return (
        <Link to={`/editUser/${user._id}`}>
            <li key={user.id} className="member-entry"> 
                <div className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-rounded" alt="profilePic"/> 
                    <i className="fa fa-forward"></i> 
                </div> 
                <div className="member-details"> 
                    <div className="row info-list col-md-12"> 
                        <li className="col-sm-2"> 
                            <h5> name </h5> 
                            <h6 key={user.id}>{user.name}</h6>
                        </li> 
                        <li className="col-sm-3">
                            <h5>email</h5>
                            <h6 key={user.id}>{user.email}</h6> 
                        </li> 
                        <li className="col-sm-3"> 
                            <h5>dob</h5> 
                            <h6 key={user.id}>{user.dob}</h6> 
                        </li> 
                        <li className="col-sm-2"> 
                            <h5>Status</h5> 
                            <h6 key={user.id}>{user.status}</h6>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Change 
                            </button>
                        </li> 
                        <li className="col-sm-2"> 
                            <h5>View Profile</h5> 
                            
                            <button type="button" className="btn" ><h6><i className="far fa-eye"></i></h6>
                            </button>
                        </li> 
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Edit Status</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Inctive
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div> 
                </div> 
        </li>
        </Link>)
    })

    const pageCount = Math.ceil(user.length/userPerPage);

    const changePage =({selected}) => {
        setPageNum(selected)
    };
        
    
    return (
        <div className="container" >
        <div className="row bootstrap snippets bootdeys"> 
            <div className="col-md-9 col-sm-7"> 
                <h2 style={{color:"black", paddingLeft:"40px"}}>Users </h2> 
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
            {displayData}
            <ReactPaginate
            previousLabel={"Previous"} 
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </ul>
    </div>
    )
}

export default UserList;
