import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import { Link, Switch, Route } from "react-router-dom";



function Routing() {

  <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
            ></Home>
          )}
        ></Route>
        <Route
          exact
          path="/signin"
          render={(props) => (
            <Signin
              {...props}
            ></Signin>
          )}
        ></Route>
      </Switch>
}

export default Routing;