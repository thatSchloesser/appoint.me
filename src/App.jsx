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
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/styles';

// Components
import Home from './components/HOME/index';
// import Dashboard from './components/dashboard/Dashboard';
import Dashboard from './components/class-dashboard/Dashboard';

// CSS and Fonts
import './App.css';
// import makeStyles from './styles.js';

const history = createBrowserHistory();

// const styles = makeStyles();
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: 'none',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     overflow: 'auto',
//     flexDirection: 'column',
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

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
    // const classes = useStyles();

    return (
      <>
        <CssBaseline />
        <Router history={history}>
          {/* <Container> */}


          {/* <AppBar position="absolute" className={clsx(props.classes.appBar, open && props.classes.appBarShift)}>
            <Toolbar className={props.classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(props.classes.menuButton, open && props.classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
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
              paper: clsx(props.classes.drawerPaper, !open && props.classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={props.classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer> */}

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
      </>
    );
  }
}

export default withStyles({})(App);
