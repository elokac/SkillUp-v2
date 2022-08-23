import React from 'react';
import { Box, Grid } from '@material-ui/core';
import useStyle from './style';

export const HomeCont3 = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid item>
          <Box className={classes.imgCont}>
            <img src="https://bit.ly/3xZFk0W" alt="img" />
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.textCont1}>
            <h2>World-class learning for you </h2>
          </Box>
          <Box className={classes.textCont2}>
            <p>
              You <strong> do not have to break the bank to get the skill(s) you desire. </strong>
              
              <span className={classes.spanText}>career benefits.</span>
            </p>
          </Box>
         
        </Grid>
      </Grid>
    </div>
  );
};
