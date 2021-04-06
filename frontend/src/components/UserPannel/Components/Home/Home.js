import React from 'react'
import './footer.css';
import investment from '../Images/investment.png';
import ReactPlayer from 'react-player'
import UserNavbar from './UserNavbar';
import './home.css';
import {Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>  
        <UserNavbar />
        <div className='container2'>
            <h1 className="heading1">Why Mutual funds are Necessary ?</h1><br/>
            <ReactPlayer className='video' url='https://www.youtube.com/watch?v=qOARxpiwFKQ'/>
            <p className="para2">Mutual Fund is India's friendliest online-only investment platform.
            Built on robust technology, FundsIndia gives users access to mutual funds from leading fund houses in India, 
            stocks from the BSE, corporate fixed deposits and various other investment products,
                all in one convenient online location. In short, FundsIndia is your one stop shop to build wealth.</p>
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=-g13ACl-87E"/> <br/>
                <Link to = './mutualfunds'className="button1">Start Investing Now</Link>

        </div>
        <div className ="viki">
            <div className="container">
                <div className="row">
                    <div className="col" ><br/>
                    <div className="card" id="azim" style={{width:"18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">INVESTMENT OBJECTIVES</h5>
                            <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                        </div>
                    </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">INVESTMENT OBJECTIVES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">INVESTMENT OBJECTIVES<br/> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p><br /><br /><br />
                            </div>
                        </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">About</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"><br/>
                        <div className="card" id="azim" style={{width:"18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Service </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
        </div>
        <div>
        </div>
        <div>
            <img src={investment} alt="data" style={{width:"1550px",height:"500px"}}/>
        </div>
        </>
    )
}


export default HomePage;
