import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    marginBottom: '20px'
  }
});

const NewsItem = ({news}) => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={news.image}
          title={news.category}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={news.url}>Link</a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default function GeneralNews() {
  const classes = useStyles();
  const generalNews = useSelector(state => state.generalNews);

  return (
    <>
      <Typography className={classes.title} variant="h3" component="h2" align='center'>
        NEWS
      </Typography>
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