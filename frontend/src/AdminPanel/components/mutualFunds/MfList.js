import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import '../adminpannel.css';


const MfList = () => {

    const [mutualFunds, setMutualFunds] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    const mfPerPage = 3
    const pageVisited = pageNum*mfPerPage

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/getMutualFunds/`, {
            headers:{
                'token': localStorage.getItem('token')
            }
        })
        .then(res=>{
            setMutualFunds(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);

    const displayData = mutualFunds.slice(pageVisited,pageVisited+mfPerPage)
    .map(mutualFunds=>{
        // console.log(mutualFunds._id)
        return(
        <Link to={`/updateMf/${mutualFunds._id}`}>
        <div className="row md-2">
            <div className="col-md-11">
                <div className="offer offer-success">
                    <div className="shape">
                        <div className="shape-text">
                            M.F 								
                        </div>
                    </div>
                    <div className="offer-content ">
                        <h3 className="lead m-5"> 
                            <div className="newsds" style={{cursor:"pointer", color:"navy"}}>Scheme_Code:{mutualFunds.Scheme_Code}</div> 
                        </h3>
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
        </div></Link>
        )
        })

        const pageCount = Math.ceil(mutualFunds.length/mfPerPage);

        const changePage =({selected}) => {
            setPageNum(selected)
        };

    return (
        <div>
            <div className="containerazim ">
            <center><h1 style={{width:"100vh",color:"red"}}>List of all MutualFunds</h1></center><hr style={{width:"100vh",color:"red",height:"2px"}}/>
            <ul className="item" style={{listStyle:"none"}}>
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
        </div>
    )
}

export default MfList;
