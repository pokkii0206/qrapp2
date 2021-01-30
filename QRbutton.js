import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QrReader from 'react-qr-reader'
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        right: 30,
        bottom:30,
    }
}));

const  QRButton = withRouter(props =>
{
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () =>
  {
    setOpen(true);
  };
  const handleClose = () =>
  {
    setOpen(false);
  };

  const [text, setState] = React.useState('検出されていません')

  function handleScan (data)
  {
    if (data) {
      const value = '/Customer/' + data;
      history.push(value);
    }
  }
    
  function handleError (err)
  {
    setState(err);
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          QRコードをかざして下さい
        </DialogTitle>
        <DialogContent dividers>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify='center'
            style={{ minHeight: '100' }}
          >
            <QrReader
              delay={100}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '50vh', height: '50vh' }}

            />
            <h3>{text}</h3>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
      <Fab color="primary" aria-label="add" className={classes.root} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

    </div>
  );

});

export default QRButton;