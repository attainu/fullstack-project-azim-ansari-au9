import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "../AdminPanel/components/home/Navbar";
import CreateMutualFunds from './components/mutualFunds/CreateMutualFunds';
import Home from './components/home/Home';
import Login from './components/home/Login';
import UserList from './components/user/UserList';
import PrivateRoutes from './components/auth/PrivatRoutes';
import ProfileDetails from './components/user/ProfileDetails';

const AdminRoutes =( ) => {
    return (
        <Router >
            <Navbar />
            <Switch>
                <PrivateRoutes exact path='/' component={Home} />
                <PrivateRoutes exact path='/userlist' component={UserList} />
                <PrivateRoutes exact path='/mutualfunds' component={CreateMutualFunds} />
                <PrivateRoutes exact path="/editUser/:id" component={ProfileDetails} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
        
    )
}

export default AdminRoutes;