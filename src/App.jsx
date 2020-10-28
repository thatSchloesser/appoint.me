import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import axios from 'axios';

// Components
import Home from './components/HOME/index';
import Dashboard from './components/dashboard/Dashboard';

// CSS and Fonts
import './App.css';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someData: null,
    };
  }

  componentDidMount() {
    console.log('component mounted');
  }

  render() {
    // could add ThemeProvider here if desired.
    return (
      <Router history={history}>
        {/* <Container> */}
        <Switch>
          <Route path="/test">
            <>
              {/* TESTING ROUTING */}
              <Home />
            </>
          </Route>
          <Route path="/">
            <>
              <Dashboard />
            </>
          </Route>
        </Switch>
        {/* </Container> */}
      </Router>
    );
  }
}

export default App;
