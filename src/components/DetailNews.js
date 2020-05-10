import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default class DetailNews extends React.Component {

  constructor(props){
  super(props);
  this.state = { messages : [] };
  }

  render() {
    const news = this.props.data;

    return(
      <div>
        <Typography variant="h6" gutterBottom>
          {news.headline}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {news.summary}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <a href={news.url}>Link</a>
        </Typography>
        <Divider/>
      </div>
      
    );
  }
}