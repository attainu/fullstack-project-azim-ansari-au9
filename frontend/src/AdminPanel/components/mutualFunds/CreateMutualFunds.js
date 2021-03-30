import React from 'react';
import '../adminpannel.css';
import MfList from './MfList';
import AddMutualFunds from './AddMutualFunds';


const CreateMutualFunds =() => {

    


    return (
        <div className='row'>
            <div className='col-7'>
                <MfList />
            </div>
            <div className='col-5'>
                <AddMutualFunds />
            </div>

        </div>
        

    )
}

export default CreateMutualFunds
