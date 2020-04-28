import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { selectStock } from '../action';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

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

function DetailCard({stock}) {
  const classes = useStyles();

  return(
    <Card className={classes.root_card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Buy {stock.symbol}
        </Typography>
        <Divider/>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Shares
          |
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </form>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Market Price {stock.price}
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    stock: state.selected
  }
}

export default connect(
  mapStateToProps
)(DetailCard)