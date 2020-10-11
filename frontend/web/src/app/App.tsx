import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Box } from "../components/Box";

import { Four0Four } from "../containers/404/FourOFour";
import { Home } from "../containers/home/Home";
import { Login } from "../containers/login/Login";
import { Signup } from "../containers/signup/Signup";

import { lightTheme, darkTheme } from "../theme";

function App() {
  const [isLogged] = useState(false); // TODO:
  const [currentTheme] = useState("dark"); // TODO:

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <Box bg="primary" color="text" flex={1} height="100vh">
        <BrowserRouter>
          {isLogged ? null : (
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/" exact component={Home} />
              <Route component={Four0Four} />
            </Switch>
          )}
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
