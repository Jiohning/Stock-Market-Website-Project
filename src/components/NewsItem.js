import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop: '5px',
  },
  media: {
    height: 140,
  },
  title: {
    marginBottom: '20px'
  }
});

export default function NewsItem({news}) {
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
          <Typography gutterBottom variant="subtitle2" component="h2">
            {news.headline}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
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