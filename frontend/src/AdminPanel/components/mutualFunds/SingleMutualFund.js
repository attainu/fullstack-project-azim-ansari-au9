import React from 'react';


const SingleMutualFund = () => {
    return (
        <div className="signup-form">
        <center> <h1 style={{width:"50vh",color:"red"}}>Edit Mutual Fund</h1>
        </center>
        <form action="" method="post" className="form-horizontal" /*onSubmit={this.submitHandler}*/>
                <div className="col-xs-8 col-xs-offset-4">
                    <h2>Create Mutual Funds</h2>
                </div>		
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Code</label>
                    <div className="col-xs-8">
                        <input type="text" className="form-control" name="Scheme_Code" required="required" /*onChange={this.changHandler}  value={Scheme_Code}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Name</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Name" className="form-control" name="Scheme_Name" required="required" /*onChange={this.changHandler} value={Scheme_Name}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Mutual_Fund_Family</label>
                    <div className="col-xs-8">
                        <input type="Mutual_Fund_Family" className="form-control" name="Mutual_Fund_Family" required="required" /*onChange={this.changHandler} value={Mutual_Fund_Family}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Type</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Type" className="form-control" name="Scheme_Type" required="required" /*onChange={this.changHandler} value={Scheme_Type}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Net_Asset_Value</label>
                    <div className="col-xs-8">
                        <input type="number" className="form-control" name="Net_Asset_Value" required="required" /*onChange={this.changHandler} value={Net_Asset_Value}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-4">Scheme_Category</label>
                    <div className="col-xs-8">
                        <input type="Scheme_Category" className="form-control" name="Scheme_Category" required="required" /*onChange={this.changHandler} value={Scheme_Category}*//>
                    </div>        	
                </div>
                <div className="form-group">
                    <div className="col-xs-8 col-xs-offset-4">
                        <center>
                            <button type="submit" className="btn btn-primary btn-lg">Create</button>
                        </center>
                    </div>  
                </div>		      
            </form>
    </div>
    )
}

export default SingleMutualFund;
