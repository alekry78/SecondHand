import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyles";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
function Views() {
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <GlobalStyle/>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
                  <Route path="/register">
                      <RegisterPage />
                  </Route>
                  <Route path="/logout">
                      <Logout />
                  </Route>
              </Switch>
          </ThemeProvider>
      </Router>
  );
}

export default Views;
