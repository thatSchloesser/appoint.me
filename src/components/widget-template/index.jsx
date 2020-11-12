import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Copyright from '../copyright';

import styles from '../../styles/styles';

// this is a template componenet that needs to be reformatted
class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    console.log('mounted home');
  }

  render() {
    const { classes } = this.props;

    // look at styles.js. this is a cool way to setup a variable-width (based on grid)
    // paper element with different heights. 

    // in the future, we can change 'fixedHeight' to 'componentxHeight' in our styles
    // (and even create individual style files)

    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  YOUR WIDGET HERE (along with others above or below if desired)
                </Paper>
              </Grid>
            </Grid>
            <Copyright />
          </Container>
        </main>
      </>
    );
  }
}

// Overview.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Widget);
