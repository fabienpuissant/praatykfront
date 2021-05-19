import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute"
import { ACCESS_TOKEN } from "./constants/token";
import setAuthorizationToken from "./constants/authorizationHeader";
import jwt from "jsonwebtoken";
import Connexion from "./views/Connexion"
import Admin from './layouts/Admin';
import store from './redux/store';
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/Auth/action-creators" 


class App extends Component {
   
    componentWillMount() {
        if (localStorage[ACCESS_TOKEN]) {
            const data = jwt.decode(localStorage[ACCESS_TOKEN])
            if (data.exp > Math.round((new Date()).getTime() / 1000)) {
                setAuthorizationToken(localStorage[ACCESS_TOKEN]);
                store.dispatch(setCurrentUser(data))

            } else {
                localStorage.removeItem(ACCESS_TOKEN)
            }
        } 
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/signIn" component={Connexion} />
                    <ProtectedRoute component={Admin} />
                </Switch>
            </BrowserRouter>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    };
};

export default connect(mapDispatchToProps)(App);


