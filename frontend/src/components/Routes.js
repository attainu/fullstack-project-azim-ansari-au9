import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateMutualFunds from './AdminPannel/mutualFunds/CreateMutualFunds';
import Home from './AdminPannel/home/Home';
import Login from './AdminPannel/home/Login';
import UserList from './AdminPannel/user/UserList';
import PrivateRoutes from './AdminPannel/auth/PrivatRoutes';
import ProfileDetails from './AdminPannel/user/ProfileDetails';
import UpdateMf from './AdminPannel/mutualFunds/UpdateMf';
import MutualFundsPage from './UserPannel/Components/MutualFunds/MutualFundsPage'
import HomePage from './UserPannel/Components/Home/Home';
import Footer from './UserPannel/Components/Home/Footer';
import EmiCalculator from './UserPannel/Components/Calculator/EmiCalculator';
import SignUp from './UserPannel/Components/Home/SignUp';
import ErrorPage from './UserPannel/user/ErrorPage';
import LoginUser from './UserPannel/Components/Home/LoginUser';
import UserProfile from './UserPannel/Components/Home/UserProfile';

const AdminRoutes =( ) => {
    return (
        <Router >
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/mutualfunds' component={MutualFundsPage} />
                <Route exact path='/calculator' component={EmiCalculator} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/login' component={LoginUser} />
                {/* <Route exact path='/about' component={About} /> */}
                <Route exact path='/profile' component={UserProfile} />
                <PrivateRoutes exact path='/admin' component={Home} />
                <PrivateRoutes exact path='/admin/userlist' component={UserList} />
                <PrivateRoutes exact path='/admin/mutualfunds' component={CreateMutualFunds} />
                <PrivateRoutes exact path='/admin/updateMf/:id' component={UpdateMf} />
                <PrivateRoutes exact path="/admin/editUser/:id" component={ProfileDetails} />
                <Route exact path='/admin/login' component={Login} />
                <Route><ErrorPage /></Route>
            </Switch>
            <Footer />
        </Router>
        
    )
}

export default AdminRoutes;