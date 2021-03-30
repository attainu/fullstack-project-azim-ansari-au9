import React ,{useEffect, useState} from 'react';

// useEffect(async()=>{
//     const id = await props.match.params.id;
//     await axios.post(`http://localhost:3000/api/admin/getSingleUser/${id}`,{
//         headers:{
//             'token': localStorage.getItem('token')
//         }
//     })
//         .then(res=>{
//             console.log(res.data.userData)
//             setUser(res.data.userData)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// },[])

const EditSingleUser = (props) => {

    const [values, setValue] = useState({
        name:"",
        email:"",
        dob:"",
        status:""
    }) 

    const {name, email, dob, status} = values



    return (
        <div>
            <div className="signup-form">
                    <center>
                        <h1 style={{width:"50vh",color:"red"}}>Edit User</h1>
                        </center>
                    <form action="" method="post" className="form-horizontal"/* onSubmit={this.submitHandler}*/>
                        <div className="col-xs-8 col-xs-offset-4">
                            <h2>User Edit profile</h2>
                        </div>		
                        <div className="form-group">
                            <label className="control-label col-xs-4">name</label>
                            <div className="col-xs-8">
                        <input type="text" className="form-control" name="name" required="required" placeholder={props.name}/*onChange={this.changHandler}*/  value={props.name}/>        
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">email</label>
                            <div className="col-xs-8">
                                <input type="email" className="form-control" name="email" required="required" /*onChange={this.changHandler} value={props.user.email} */ />
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">dob</label>
                            <div className="col-xs-8">
                                <input type="dob" className="form-control" name="dob" required="required" /*onChange={this.changHandler} value={dob}*//>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4">status</label>
                            <div className="col-xs-8">
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="col-md-6 form-check-label" htmlFor="flexRadioDefault1">  Active  </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="col-md-6 form-check-label" htmlFor="flexRadioDefault2"> Inactive </label>
                                </div>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-4 ">Profile_Pic</label>
                            <div className="col-xs-8">
                            <div className="input-group">
                                <div className="custom-file" >
                                    <input type="file" className="custom-file-input " id="inputGroupFile04" />
                                    <label className="custom-file-label " htmlFor="inputGroupFile04">Choose file</label>
                                </div>
                                </div>
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
        </div>
    )
}

export default EditSingleUser;
