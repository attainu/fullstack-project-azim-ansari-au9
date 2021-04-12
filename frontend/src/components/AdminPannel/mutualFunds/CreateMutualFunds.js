import React from 'react';
import '../adminpannel.css';
import MfList from './MfList';
import AddMutualFunds from './AddMutualFunds';
import Navbar from '../home/Navbar';

const CreateMutualFunds =() => {

    


    return (
        <>
        <Navbar />
        <div className='row'>
            <div className='col-7'>
                <MfList />
            </div>
            <div className='col-5'>
                <AddMutualFunds />
            </div>

        </div>
        </>
        

    )
}

export default CreateMutualFunds
