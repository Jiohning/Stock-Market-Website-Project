import React from 'react';
import Typography from '@material-ui/core/Typography';

import TopNav from '../components/TopNav';
import img from './Main.jpg';



export default function MainPage(){

  return(

    <>
      <TopNav/>

      <img id="main" src={img} alt="Road" width='100%' height='50%'/>
      {/* (Photo by Bjorn Moyo on Unsplash) */}
      <Typography variant="overline" display="block" gutterBottom>
        fastock
      </Typography>
    </>
    
  );
}