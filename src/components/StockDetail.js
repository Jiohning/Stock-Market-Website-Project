import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import DetailMain from './DetailMain';
import DetailCard from './DetailCard';

export default function Detail(){

  return(
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container>
            <DetailMain/>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <DetailCard/>
        </Grid>
      </Grid>
  </div>
  );
}