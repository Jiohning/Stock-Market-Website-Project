import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { selectStock } from '../action.js';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function StockList({stocks, selectStock}) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h2>List</h2>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Today</TableCell>
              <TableCell align="right">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((item) => (
              <TableRow key={item.name} onClick={() => selectStock(item)}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.symbol}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.today}</TableCell>
                <TableCell align="right">{item.marketcap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    stocks: state.stocks
  }
}

export default connect(
  mapStateToProps, {selectStock}
)(StockList)