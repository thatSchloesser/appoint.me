import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import axios from 'axios';


// imports TO ORGANIZE
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';

import clsx from 'clsx';


import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

//fix:
import { mainListItems, secondaryListItems } from './components/dashboard/listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
// import styles from './styles';
import { withTheme } from '@material-ui/styles';


// Components
import Home from './components/HOME/index';
// import Dashboard from './components/dashboard/Dashboard';
import Dashboard from './components/class-dashboard/Dashboard';

// CSS and Fonts
import './App.css';
import makeStyles from './styles.js';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
    };

    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  componentDidMount() {
    console.log('component mounted');
  }

  handleDrawerOpen() {
    this.setState({ openDrawer: true });
  }

  handleDrawerClose() {
    this.setState({ openDrawer: false });
  }

  render() {
    // could add ThemeProvider here if desired.
    // const classes = useStyles();

    let { openDrawer } = this.state;
    let { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Router history={history}>
            {/* <Container> */}

            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, openDrawer && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={clsx(classes.menuButton,
                    openDrawer && classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Dashboard
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    {/* icone here */}
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper,
                  !openDrawer && classes.drawerPaperClose),
              }}
              open={openDrawer}
            >
              <div className={classes.toolbarIcon}>
                <IconButton
                  onClick={this.handleDrawerClose}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>{secondaryListItems}</List>
            </Drawer>
            {/* <Dashboard />

              CONTENT HERE */}
            <Switch>
              <Route exact path="/">
                {/* <Link to="/test">
                  link test
                </Link> */}
                <Dashboard />
                <Home />
              </Route>
              <Route path="/test">
                {/* TESTING ROUTING */}
                <Home />
              </Route>
            </Switch>
            {/* </Container> */}
          </Router>
        </div>
      </>
    );
  }
}

export default withStyles(makeStyles)(App);
