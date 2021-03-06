import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import styles from '../../styles/styles';

import Copyright from '../copyright';

const dashboard = function Dashboard(props) {
  // const classes = useStyles();
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);

  return (
    <>
      <main className={props.classes.content}>
        <div className={props.classes.appBarSpacer} />
        <Container maxWidth="lg" className={props.classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* Not working:  */}
                {/* <Chart /> */}
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
          <Copyright />
        </Container>
      </main>
    </>
  );
};

export default withStyles(styles)(dashboard);
