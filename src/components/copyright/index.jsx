import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => (
  <Box pt={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Appoint.Me
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'. '}
    </Typography>
  </Box>
);

export default Copyright;
