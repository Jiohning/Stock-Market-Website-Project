import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { setStocks } from '../actions/setStock';
import StockItem from './StockItem';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StockList() {
  const classes = useStyles();
  const statestocks = useSelector(state => state.stocks);
  const stocks = statestocks[0];
  const [value, setValue] = useState('US');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    <div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">EXCHANGE</FormLabel>
          <RadioGroup aria-label="exchange" name="exchange" value={value} onChange={handleChange}>
            <FormControlLabel 
              value="US" control={<Radio />} label="US" 
              onClick={() => {
                dispatch(setStocks('US'));
              }}/>
            <FormControlLabel 
              value="KS" control={<Radio />} label="KS" 
              onClick={() => {
                dispatch(setStocks('KS'));
              }}/>
            <FormControlLabel value="disabled" disabled control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <h2>List</h2>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">Symbol</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            
            {stocks && stocks.map((item) => (
              <StockItem key = {item.symbol} data = {item}></StockItem>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}
