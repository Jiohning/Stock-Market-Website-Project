import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  alert: {
    marginTop: '10px'
  }
}));

export default function DetailAbout() {
  const classes = useStyles();
  const about = useSelector(state => state.about);

  return(
    <>
      {!about.name && 
        <Alert className={classes.alert} severity="info">
          <AlertTitle>Info</AlertTitle>
          Not Found Information
        </Alert>
      }
      {about.name && 
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              image={about.logo}
              title="Live from space album cover"/>
            
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {about.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {about.weburl}
              </Typography>
            </CardContent>
          </div>
        </Card>
      }
    </>
    

  );
}