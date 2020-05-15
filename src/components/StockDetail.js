import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';

import DetailMain from './DetailMain';
import DetailCard from './DetailCard';

export default function Detail(){
  //stocklist > stockdetail > stockitem
  const candleData = useSelector(state => state.candleData);

  return(
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container>
            <DetailMain data = {candleData}/>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <DetailCard/>
        </Grid>
      </Grid>
  </div>
  );
}