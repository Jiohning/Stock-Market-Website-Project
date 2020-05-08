import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class StockItem extends React.Component {
  constructor(props){
  super(props);
  this.state = { messages : [] };
  }

  render() {
    const stock = this.props.data;
    return(
      <TableRow>
        <TableCell>{stock.description}</TableCell>
        <TableCell align="right">{stock.symbol}</TableCell>
      </TableRow>
    );
  }
}