import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import DetailNews from './DetailNews';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function DetailMain() {
  const classes = useStyles();
  const stateStock = useSelector(state => state.stock);
  const stock = stateStock[0];
  const statePrice = useSelector(state => state.price);
  const price = statePrice[0];
  const news = useSelector(state => state.news);


  return(
    <div className={classes.root}>
      
      <div>
        <Typography variant="h3" gutterBottom>
          {stock.description}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {price.c}
        </Typography>
      </div>
      <div>
        <Typography variant="h1" gutterBottom>
          CHART
        </Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          About {stock.description}
        </Typography>
        <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          News
        </Typography>
        {news && news.map((item) => (
          <DetailNews key = {item.id} data = {item}></DetailNews>
        ))}
        
      </div>
    </div>
  );
}
