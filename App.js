import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

// Component
import AnounceCard from './AnounceCard.js';
import Home from './Home.js';
import LeftMenu from './LeftMenu.js';
import Customer from './Customer.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: 240,
  }
}));


export default function Main ()
{
  const classes = useStyles();
   
  return (
    <div>
      <LeftMenu></LeftMenu>
      <div className={classes.content}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/Customer/:text' exact>
              <Customer/>
            </Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

