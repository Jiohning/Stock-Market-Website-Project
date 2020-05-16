import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';

import NewsItem from './NewsItem';
import CandleChart from './charts/CandleChart';
import About from './DetailAbout';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  alert: {
    marginTop: '10px'
  }
});

export default function DetailMain() {

  const classes = useStyles();
  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  const exchange = useSelector(state => state.exchange);
  const news = useSelector(state => state.companyNews);
  const candleData = useSelector(state => state.candleData);
  const loading = useSelector(state => state.loading);

  return(
    <div className={classes.root}>
      {!loading && 
        <div>
          <div>
            <Typography variant="h3" gutterBottom>
              {stock.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {exchange.currency} {price.c}
            </Typography>
          </div>
          <div>
            {candleData === null && <></>}
            {candleData.s === "ok" && <CandleChart data = {candleData} loading = {loading}/>}
            {
              candleData.s !== "ok" && 
              <Alert severity="warning">
                <AlertTitle>Not Found Chart Data</AlertTitle>
                차트 데이터를 발견하지 못했습니다!
              </Alert>
            }
          </div>
          <div>
            <Typography variant="h4" gutterBottom>
              About {stock.description}
            </Typography>
            <Divider/>
            <About/>
          </div>
          <div>
            <Typography variant="h4" gutterBottom>
              News
            </Typography>
            <Divider/>
            <>
              {news.length === 0 &&  
                <Alert className={classes.alert} severity="info">
                  <AlertTitle>Info</AlertTitle>
                  Not Found {stock.description} News
                </Alert>
              }
              {news.length > 0 && news.slice(0,5).map((item) => (
                <NewsItem key = {item.id} news = {item}></NewsItem>
              ))}
            </>
            {console.log("render!")}
          </div>
        </div>
      }
    </div>
  );
}
