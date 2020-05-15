import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import NewsItem from './NewsItem';

const useStyles = makeStyles({
  title: {
    marginBottom: '20px'
  }
});

export default function GeneralNews() {
  const classes = useStyles();
  const generalNews = useSelector(state => state.generalNews);

  return (
    <>
      <Typography className={classes.title} variant="h3" component="h2" align='center'>
        NEWS
      </Typography>
      <Divider/>
      <Grid container spacing={3}>
        {generalNews.map((news)=>(
            <Grid key={news.id} item xs={4}>
              <NewsItem news = {news}></NewsItem>
            </Grid>
          ))}
      </Grid>
    </>
  );
}