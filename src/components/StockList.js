import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import StockItem from './StockItem';
import { selectStock } from '../actions/index';
import setPrice from '../actions/setPrice';
import news from '../actions/news';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StockList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const statestocks = useSelector(state => state.stocks);
  const stocks = statestocks[0];
  const exchange = useSelector(state => state.exchange);
  
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

  return (
    <div>
      <div>
        {exchange && <h2> {exchange.name} List</h2>}
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">Symbol</TableCell>
              {/* <TableCell align="right">Current Price</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {stocks && stocks.map((item) => (
              <StockItem key = {item.symbol} data = {item} 
                onClick = {() => {
                  dispatch(selectStock(item))
                  dispatch(setPrice(item.symbol))
                  dispatch(news(item.symbol, getFrom(), getTo()))}}></StockItem>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}
