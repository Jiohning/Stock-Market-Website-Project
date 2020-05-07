import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class StockItem extends React.Component {
  constructor(props){
  super(props);
  this.state = { messages : [] };
  }
  // componentDidMount(){
  //   const socket = new WebSocket('wss://ws.finnhub.io?token=bqer03frh5rashj925lg');
  //   // Connection opened -> Subscribe
  //   socket.addEventListener('open', function (event) {
  //     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
  //     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
  //     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
  //   });
  
  //   // Listen for messages
  //   socket.addEventListener('message', function (event) {
  //     console.log('Message from server ', event.data);
  //   });
  
  //   // Unsubscribe
  //   var unsubscribe = function(symbol) {
  //     socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}));
  //   };
  // }
  //{"data":[{"p":7296.89,"s":"BINANCE:BTCUSDT","t":1575526691134,"v":0.011467}],"type":"trade"}
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