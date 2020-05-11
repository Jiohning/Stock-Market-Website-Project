import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { selectStock } from '../actions/index';
import selectPrice from '../actions/selectPrice';
import news from '../actions/news';



export default function StockItem ({item}) {
  const stock = item;
  const dispatch = useDispatch();
  const history = useHistory();

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
    setTimeout(() => {
      history.push("/detail");
    }, 1000);
  }

  return(
    <TableRow onClick = {() => {
      dispatch(selectStock(item))
      dispatch(selectPrice(item.symbol))
      dispatch(news(item.symbol, getFrom(), getTo()))
      pageClick()}}>
      <TableCell>{stock.description}</TableCell>
      <TableCell align="right">{stock.symbol}</TableCell>
    </TableRow>
  );
}