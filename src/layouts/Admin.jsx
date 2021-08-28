
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../routes.js";
import {connect} from 'react-redux'

const Admin = ({history, state}) => {
 
  const getRoutes = routes => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
    });
  };

    return (
      <Switch >
        {getRoutes(routes)}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    );
  
}
const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(Admin)
