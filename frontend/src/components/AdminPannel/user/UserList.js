import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../adminpannel.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Navbar from '../home/Navbar';


const UserList = () => {

    const [user, setUser] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    const userPerPage = 4;
    const pageVisited = pageNum*userPerPage;

    useEffect(()=>{
        const fetchData = async() => {
            await axios.get(`http://localhost:3000/api/admin/getAllUser`)
            .then(res=>{
                setUser(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            });
        }
        fetchData();
        
    },[])


    const displayData = user.slice(pageVisited,pageVisited+userPerPage)
    .map(user => {
        return (
        <Link to={`/admin/editUser/${user._id}`}>
            <li key={user.id} className="member-entry"> 
                <div className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-rounded" alt="profilePic"/> 
                    <i className="fa fa-forward"></i> 
                </div> 
                <div className="member-details"> 
                    <div className="row info-list col-md-12"> 
                        <li key={user.id} className="col-sm-2"> 
                            <h5> name </h5> 
                            <h6>{user.name}</h6>
                        </li> 
                        <li key={user.id} className="col-sm-3">
                            <h5>email</h5>
                            <h6>{user.email}</h6> 
                        </li> 
                        <li key={user.id} className="col-sm-3"> 
                            <h5>dob</h5> 
                            <h6>{user.dob}</h6> 
                        </li> 
                        <li key={user.id} className="col-sm-2"> 
                            <h5>Status</h5> 
                            <h6>{user.status}</h6>
                        </li> 
                        <li key={user.id} className="col-sm-2"> 
                            <h5>View Profile</h5>    
                            <button type="button" className="row btn"><VisibilityIcon /> </button>
                            <button type="button" className="btn"><EditIcon /> </button>
                        </li> 
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
        <>
        <Navbar />
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
    </>
    )
}

export default UserList;
