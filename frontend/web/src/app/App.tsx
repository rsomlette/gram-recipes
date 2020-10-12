import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Box, Footer, Header } from "../components";

// import { Home } from "../containers/home/Home";
import { Four0Four } from "../containers/404/FourOFour";
import { Login } from "../containers/login/Login";
import { Signup } from "../containers/signup/Signup";

import { lightTheme, darkTheme, THEME } from "../theme";

function App() {
  const [isLogged] = useState(false); // TODO:
  const [currentTheme, setCurrentTheme] = useState(THEME.DARK); // TODO:

  return (
    <ThemeProvider
      theme={currentTheme === THEME.LIGHT ? lightTheme : darkTheme}
    >
      <Box
        display="flex"
        bg="primary"
        color="text"
        flexDirection="column"
        height="100vh"
      >
        <BrowserRouter>
          <Header
            theme={currentTheme}
            toggleTheme={() =>
              setCurrentTheme(
                currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
              )
            }
          />
          <Box flex={1}>
            {isLogged ? null : (
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={Four0Four} />
              </Switch>
            )}
          </Box>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
