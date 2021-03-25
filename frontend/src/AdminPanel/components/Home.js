import React from 'react';
import './adminpannel.css';

const Home = () => {
    return (
        <div className="home text-center">
            <h1>Welcome to admin pannel !!</h1><br /><br /><br /><br /><br /><br />
            <div className="row mr-5">
                <div className="card col ml-5" style={{width: "1rem", backgroundColor:"#777777"}}>Service
                    <div className="card-body" style={{color: "black"}}>
                        <p className="card-text">Manage All users <br /> Creating Mutual Funds <br/> Updaing Mutual Funds <br />Updating user user Profile<br />
                        Manage investment<br/>Etc.</p>
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
                        including where appropriate disciplinary procedures, 
                        up to and including termination of employment and possible referral 
                        to the appropriate criminal or regulatory authorities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
