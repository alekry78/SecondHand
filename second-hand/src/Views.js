import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyles";
import Home from "./components/Home/Home";
function Views() {
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <GlobalStyle/>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
              </Switch>
          </ThemeProvider>
      </Router>
  );
}

export default Views;
