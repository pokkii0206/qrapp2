import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
    rooter: {
      margin:'auto'  
    },
    
    paper: {
        height: 135,
        width: "80%",
    }
}));

 const Customer = withRouter(props =>
 {
     const classes = useStyles();
     const {text}  = useParams();
     console.log('id==>', text);
     return (
         <div>
             <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            // justify="center"
            style={{ minHeight: '100vh' }}
            >
             <Paper className={classes.paper}>
                 <h1>This user ID is {text}.</h1>
            </Paper>
            </Grid>
        </div>
    );
});

export default Customer;