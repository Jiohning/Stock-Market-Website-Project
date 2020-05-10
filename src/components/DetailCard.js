import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root_card: {
    minWidth: 275,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function DetailCard() {
  const classes = useStyles();
  const stateStock = useSelector(state => state.stock);
  const stock = stateStock[0];
  const statePrice = useSelector(state => state.price);
  const price = statePrice[0];

  return(
    <Card className={classes.root_card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Buy {stock.symbol}
        </Typography>
        <Divider/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Shares
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Market Price {price.c}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Commission US$0.00
        </Typography>
        <Divider/>
        <Typography variant="h6" component="h2">
          Estimated Cost 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          If you want to buy {stock.symbol}, we recommend securities company.
        </Typography>
      </CardContent>
    </Card>
  );
}
