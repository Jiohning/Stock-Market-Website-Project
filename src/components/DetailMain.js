import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';
import Chip from '@material-ui/core/Chip';

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
  },
  div: {
    marginBottom: '20px'
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
  const peers = useSelector(state => state.peers);

  return(
    <div className={classes.root}>
      {!loading && 
        <div>
          <div className={classes.div}>
            <Typography variant="h3" gutterBottom>
              {stock.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {exchange.currency} {price.c} 
            </Typography>
          </div>
          <div className={classes.div}>
            {candleData === null && <></>}
            {candleData.s === "ok" && <CandleChart data = {candleData} loading = {loading}/>}
            {
              candleData.s !== "ok" && 
              <Alert className={classes.alert} severity="info">
                <AlertTitle>Info</AlertTitle>
                차트 데이터가 없습니다.
              </Alert>
            }
          </div>
          <div className={classes.div}>
            <Typography variant="h4" gutterBottom>
              About {stock.description}
            </Typography>
            <Divider/>
            <About/>
          </div>
          <div className={classes.div}>
            <Typography variant="h4" gutterBottom>
              News
            </Typography>
            <Divider/>
            <>
              {news.length === 0 &&  
                <Alert className={classes.alert} severity="info">
                  <AlertTitle>Info</AlertTitle>
                  {stock.description}과 관련된 뉴스가 없습니다.
                </Alert>
              }
              {news.length > 0 && news.slice(0,5).map((item) => (
                <NewsItem key = {item.id} news = {item}></NewsItem>
              ))}
            </>
            {console.log("render!")}
          </div>
          <div className={classes.div}>
            <Typography variant="h4" gutterBottom>
              Peers
            </Typography>
            <Divider/>
            {
              peers.map((item)=>(
                <Chip variant="outlined" key={item} color="primary" label={item}/>
              ))
            }
          </div>
        </div>
      }
    </div>
  );
}
