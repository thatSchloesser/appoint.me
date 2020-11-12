import React from 'react';
import clsx from 'clsx'; // class name strings
// import axios from 'axios';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

// material ui theming
import { withStyles } from '@material-ui/core/styles';
// import { withTheme } from '@material-ui/styles';

// Material-ui compoonents
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  List,
  Divider,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';

// icons -> need full import string, sadly
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

// sidebaritems (move file):
import { mainListItems, secondaryListItems } from './jsx/listItems';

// Components
import Widget from './components/widget-template';
import Dashboard from './components/class-dashboard/Dashboard';
// import Dashboard from './components/dashboard/Dashboard';
// import Copyright from './components/copyright';

// CSS and Fonts
import makeStyles from './styles'; // js material-ui styles
import './App.css';

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

    const { openDrawer } = this.state;
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Router>
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
                    <NotificationsIcon />
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
              </Route>
              <Route exact path="/test">
                {/* <Link to="/test">
                  link test
                </Link> */}
                <Dashboard />
              </Route>
              <Route path="/home">
                {/* TESTING ROUTING */}
                <Widget />
              </Route>
            </Switch>

            {/* </Container> */}
          </Router>
          {/* Not working, add on each component */}
          {/* <Copyright /> */}
        </div>
      </>
    );
  }
}

// it works without withTheme, but we are using theme, so I'm... keeping it?
// https://material-ui.com/styles/api/#withstyles-styles-options-higher-order-component
export default withStyles(makeStyles, { withTheme: true })(App);
