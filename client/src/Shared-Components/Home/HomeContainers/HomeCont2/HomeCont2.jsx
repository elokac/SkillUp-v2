import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './style';

export const HomeCont2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>Getting highly profitable skills at your fingertips</h2>
      <Container>
        <Grid container justify="space-evenly">
          <Grid item>
            <Box>
              <img src="https://bit.ly/3yL7sEP" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Gain expertise</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>in the latest skills</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>with courses and</span>
              <span className={classes.spanSub}>Specialisations in</span>
              <span className={classes.spanSub}>different vocational,</span>
              <span className={classes.spanSub}>and power</span>
              <span className={classes.spanSub}>skills</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3uvpCaj" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Learn job-ready</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>career skills</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>in Software Development,</span>
              <span className={classes.spanSub}>Cloud DevOps,</span>
              <span className={classes.spanSub}>Machine Learning and</span>
              <span className={classes.spanSub}>Artificial Intelligence,</span>
              <span className={classes.spanSub}>Database Administration,</span>
              <span className={classes.spanSub}> and more</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3fqVetj" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Earn a</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>Certificate</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>from the world&apos;s</span>
              <span className={classes.spanSub}>leading</span>
              <span className={classes.spanSub}>E-Learning Platform</span>
              <span className={classes.spanSub}> and Partners</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3fwRmqN" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Upskill</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>yourself</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>with on-demand</span>
              <span className={classes.spanSub}>training and</span>
              <span className={classes.spanSub}>development</span>
              <span className={classes.spanSub}>programs</span>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
