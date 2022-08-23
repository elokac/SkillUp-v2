import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './styles';

export const HomeCont1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <h2 className={classes.heading}>
          In Conjunction with &nbsp;
          <a
            href="https://elev8me.com/"
            style={{ color: 'rgb(0, 86, 210)', textDecoration: 'none' }}
          >
            Microsoft ATO and Elev8
          </a>
        </h2>
      </Container>
      <Container style={{ marginTop: '50px', paddingBottom: '64px' }}>
        <Grid container justify="space-around">
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3njMyIA "
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3QIJUJP"
                alt="logo-img"
              />
            </Box>
          </Grid>
             
          
          
          
          
        </Grid>
      </Container>
    </div>
  );
};
