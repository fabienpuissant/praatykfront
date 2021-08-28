import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute"
import { ACCESS_TOKEN, tokenValue } from "./constants/token";
import InProgressPage from "./views/InProgressPage"
import Admin from './layouts/Admin';
import store from './redux/store';
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/Auth/action-creators" 
import "./App.css"

class App extends Component {
   
    componentWillMount() {
        if (localStorage[ACCESS_TOKEN]) {
            // const data = jwt.decode(localStorage[ACCESS_TOKEN])
            // if (data.exp > Math.round((new Date()).getTime() / 1000)) {
            //     setAuthorizationToken(localStorage[ACCESS_TOKEN]);
            //     store.dispatch(setCurrentUser(data))

            // } else {
            //     localStorage.removeItem(ACCESS_TOKEN)
            // }
            if(localStorage[ACCESS_TOKEN] === tokenValue){
                store.dispatch(setCurrentUser({
                    user: "admin"
                }))
            }
        } 
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/about" component={InProgressPage} />
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


