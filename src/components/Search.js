/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { selectStock } from '../actions/index';
import { selectPrice } from '../actions/price';
import getCompanyNews from '../actions/getCompanyNews';
import candle from '../actions/getCandle';

export default function Search() {
  const stocks = useSelector(state => state.stocks);
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.loading);

  const getTo = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    return(
      today
    );
  }

  const getFrom = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    if(mm === 0) {
      mm = 12;
    }
    today = yyyy + '-' + mm + '-' + dd;
    return(
      today
    );
  }

  const pageClick = () => {
    if(loading){
      pageClick();
    }
    else{
      setTimeout(() => {
        history.push("/detail");
      }, 2000);
    }
  }

  const time = () => {
    var today = Math.floor(new Date()/1000);
    return(today);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={stocks}
      getOptionLabel={(option) => option.description}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      onChange={(event, value) => {
        dispatch(selectPrice(value.symbol))
        dispatch(selectStock(value))
        dispatch(getCompanyNews(value.symbol, getFrom(), getTo()))
        dispatch(candle(value.symbol, time()-86400, time()))
        pageClick()
      }}
    />
    
  );
}