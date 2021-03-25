import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "../AdminPanel/components/Navbar";
import CreateMutualFunds from './components/CreateMutualFunds';
import Home from './components/Home';
import Login from './components/Login';
import UserList from './components/UserList';

const AdminRoutes =( ) => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/userlist' component={UserList} />
                <Route exact path='/mutualfunds' component={CreateMutualFunds} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
        
    )
}

export default AdminRoutes;