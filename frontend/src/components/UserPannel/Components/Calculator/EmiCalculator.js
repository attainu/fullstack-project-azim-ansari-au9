import React, { useState } from 'react'
import UserNavbar from '../Home/UserNavbar';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Table, TableCell, TableRow} from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import TableDetails from './TableDetails';
import SliderMarks from './SliderMarks';
import '../Home/profile.css'


const PrettoSlider = withStyles({
    root: {color:'balck',height:10},
    thumb: {height: 25, width: 25, backgroundColor: 'white', border: '3px solid black', marginTop: -9,marginLeft: -9},
    track: {height:10, borderRadius: 4},
    rail: {height: 10, borderRadius: 4}
})(Slider);

const EmiCalculator = () => {

    const [pAmount, setpAmout] = useState(500000);
    const [interest, setInterest] = useState(7);
    const [duration, setDuration] = useState(147)
    const maxValue = 600000;
    const intMax = 20;
    const maxDuration = 360;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1/(1+intr), duration)))):0 ;
    const totalAmt = duration * emi ;
    var TotalAmountOfCredit = Math.round((emi/intr) *(1- Math.pow((1+intr), (-duration))))
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit)

    return (
        <>
        <UserNavbar />
        <div className='container emp-profile'>
            <h2>Emi Calculator</h2>
            <div className='row'>
                <div className='col-md-12' >
                    <Typography gutterBottom><strong>Loan Amount</strong></Typography>
                    <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt} onChange={(event, vAmt) => {setpAmout(vAmt)}} defaultValue={pAmount} max={maxValue} />
                </div>

                    <div className='col-md-6'>
                        <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
                        <PrettoSlider value={interest} marks={SliderMarks.marksInt} onChange={(event, vInt) => {setInterest(vInt);}} defaultValue={interest} max={intMax} />
                    </div>
                    <div className='col-md-6'>
                        <Typography gutterBottom><strong>Tenure (Months)</strong></Typography>
                        <PrettoSlider value={duration} marks={SliderMarks.marksTenure} onChange={(event, vDur) => {setDuration(vDur);}} defaultValue={duration} max={maxDuration} />
                    </div>

            </div><br />
        <Table>
            <TableRow>
                <TableCell>
                    <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
                </TableCell>
                <TableCell>
                    <Pie
                        data={{
                            labels : ['Total Interest', 'Total Amount'],
                            datasets : [{
                                data : [TotalAmountOfInterest, pAmount],
                                backgroundColor: ['blue', 'yellow']
                            }]
                        }}
                        width={200}
                        height={200}
                        />
                </TableCell>
            </TableRow>
        </Table>
        </div>
        </>
    )
}

export default EmiCalculator
