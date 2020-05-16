import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';


export default function ErrorMessage(){
  const error = useSelector(state => state.error);
  if(!error) {
    return <></>;
  }
  return(
    <Alert severity="error">
      Error: {error.message}
    </Alert>
  );
}