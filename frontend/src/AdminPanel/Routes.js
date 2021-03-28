import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "../AdminPanel/components/Navbar";
import CreateMutualFunds from './components/CreateMutualFunds';
import Home from './components/Home';
import Login from './components/Login';
import UserList from './components/UserList';
import PrivateRoutes from './components/auth/PrivatRoutes';

const AdminRoutes =( ) => {
    return (
        <Router >
            <Navbar />
            <Switch>
                <PrivateRoutes exact path='/' component={Home} />
                <PrivateRoutes exact path='/userlist' component={UserList} />
                <PrivateRoutes exact path='/mutualfunds' component={CreateMutualFunds} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
        
    )
}

export default AdminRoutes;