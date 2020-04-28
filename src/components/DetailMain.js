import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

function DetailMain({stock}) {
  const classes = useStyles();

  return(
    <div>
      <div>
        <Typography variant="h3" gutterBottom>
          {stock.name}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {stock.price}
        </Typography>
      </div>
      <div>
        <Typography variant="h1" gutterBottom>
          CHART
        </Typography>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          About {stock.symbol}
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
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    stock: state.selected
  }
}

export default connect(mapStateToProps)(DetailMain)