import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


import styles from '../styles/styles';

//this is a template componenet that needs to be reformatted
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someData: [],
    };
  }

  componentDidMount() {
    console.log('mounted home');
  }

  render() {
    
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  {/* <Chart /> */}
                  testing testing 123
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              {/* <Copyright /> */}
            </Box>
          </Container>
        </main>
      </>
    );
  }
}

// Overview.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Home);
