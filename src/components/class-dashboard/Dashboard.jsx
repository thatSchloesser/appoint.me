import React from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

// import { withTheme } from '@material-ui/styles';
// import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Home from '../HOME';
import styles from './styles';

import Copyright from '../copyright';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Appoint.Me
//       </Link>
//       {' '}
//       {new Date().getFullYear()}
//       {'. '}
//     </Typography>
//   );
// }

let dashboard = function Dashboard(props) {
  // const classes = useStyles();
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);

  return (
    <>
      {/* <CssBaseline />
      <AppBar position="absolute" className={clsx(props.classes.appBar, open && props.classes.appBarShift)}>
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
      <main className={props.classes.content}>
        <div className={props.classes.appBarSpacer} />
        <Container maxWidth="lg" className={props.classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                {/* <Home /> */}
                HELLO WORLD!!!
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={props.classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default withStyles(styles)(dashboard);
