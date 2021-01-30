import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AnounceCard from './AnounceCard.js';
import QRButton from './QRbutton.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';


export default function Home ()
{
    return (
        <div>
            <AnounceCard></AnounceCard>
           <QRButton></QRButton>
        </div>
    );
}