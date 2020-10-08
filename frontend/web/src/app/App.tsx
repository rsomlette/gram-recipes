import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Four0Four } from "../containers/404/FourOFour";

import { Home } from "../containers/home/Home";
import { Login } from "../containers/login/Login";
import { Signup } from "../containers/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <Route component={Four0Four} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
