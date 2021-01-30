import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

let usestyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
    },
    paper:{
    
        margin: 20,
        maxHeight: 120,
        width:'70%',
        overflow: 'auto'
    },

    list: {
        display: 'flex',
        flexDirection: 'column'
    }

}));

export default function AnounceCard ()
{
    const classes = usestyles();
    return (
            <div className={classes.root}>
                <Paper className = {classes.paper} >
                    <List className={classes.list}>
                        <ListItem>
                        <ListItemText primary={"・1/26（火）1４時30分ーー「鈴木様」が「地鎮祭」を「1/30（土）12:00~12:30」に申込されました"} />
                        </ListItem>
                        <ListItem>
                        <ListItemText primary={"・1/26（火）1４時30分ーー「鈴木様」が「地鎮祭」を「1/30（土）12:00~12:30」に申込されました"} />
                        </ListItem>
                        <ListItem>
                        <ListItemText primary={"・1/26（火）1４時30分ーー「鈴木様」が「地鎮祭」を「1/30（土）12:00~12:30」に申込されました"} />
                        </ListItem>
                         <ListItem>
                        <ListItemText primary={"・1/26（火）1４時30分ーー「鈴木様」が「地鎮祭」を「1/30（土）12:00~12:30」に申込されました"} />
                        </ListItem>
                            
                    </List>
            </Paper>
            </div>
       
    );
}