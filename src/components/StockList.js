import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

import StockItem from './StockItem';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StockList() {
  const classes = useStyles();

  const stocks = useSelector(state => state.stocks);
  const exchange = useSelector(state => state.exchange);
  

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
              <StockItem key = {item.symbol} item={item} />))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}
