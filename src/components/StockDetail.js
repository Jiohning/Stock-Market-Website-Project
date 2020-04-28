import React from 'react';
import Grid from '@material-ui/core/Grid';
import DetailMain from './DetailMain.js';
import DetailCard from './DetailCard.js'

export default function Detail(){
  //stocklist > stockdetail > stockitem
  
  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <DetailMain/>
        </Grid>
        <Grid item xs={4}>
          <DetailCard/>
        </Grid>
      </Grid>
  </div>
  );
}