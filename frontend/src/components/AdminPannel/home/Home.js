import React from 'react';
import {Link } from 'react-router-dom';
import '../adminpannel.css';
import Navbar from './Navbar';

const Home = () => {
    return (
    <>
        <Navbar />
        <div className ="viki">
            <div className="container">
                <div className="row">
                    <div className="col" ><br/>
                    <div className="card" id="azim" style={{width:"18rem"}}>
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <Link to='/mutualfunds'> <button className="Risk factor">Read more</button> </Link>
                    </div>
                    </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                        <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <Link to='/userlist'> <button className="Risk factor">Read more</button> </Link>
                    </div>
                        </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                        <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <button className="Risk factor">Read more</button>
                    </div>
                        </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                        <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">This policy applies to all officers, directors, shareholders, 
                        employees and appointed third party representatives of FTI (including but not limited to agents, 
                        intermediaries, consultants and introducers) in all locations. Violation of this policy will be severely sanctioned, 
                        including where appropriate disciplinary procedures</p>
                    </div>
                        </div>
                    </div>
                </div>
            </div><br/>
        </div>
        <div>
        </div>
        {/* <div className="home text-center">
            <h1>Welcome to admin pannel !!</h1><br /><br /><br /><br /><br /><br />
            <div className="row mr-5">
                <div className="card col ml-5" style={{width: "1rem", backgroundColor:"#777777"}}>MUTUAL Funds
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <Link to='/mutualfunds'> <button className="Risk factor">Read more</button> </Link>
                    </div>
                </div>
                <div className="card col ml-5" style={{width: "1rem", backgroundColor:"#777777"}}>USER Details
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <Link to='/userlist'> <button className="Risk factor">Read more</button> </Link>
                    </div>
                </div>
                <div className="card col ml-5" style={{width: "1rem", backgroundColor:"#777777"}}>Risk Factor
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        <button className="Risk factor">Read more</button>
                    </div>
                </div>
                <div className="card col ml-5" style={{width: "10rem", backgroundColor:"#777777"}}>Policy
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">This policy applies to all officers, directors, shareholders, 
                        employees and appointed third party representatives of FTI (including but not limited to agents, 
                        intermediaries, consultants and introducers) in all locations. Violation of this policy will be severely sanctioned, 
                        including where appropriate disciplinary procedures</p>
                    </div>
                </div>
                <div className="card col ml-5" style={{width: "1rem", backgroundColor:"#777777"}}>Service
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">Manage All users <br /> Creating Mutual Funds <br/> Updaing Mutual Funds <br />Updating user user Profile<br />
                        Manage investment<br/>Etc.</p>
                    </div>
                </div>
            </div>
        </div> */}
    </>
    )
}

export default Home
