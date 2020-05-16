import React from 'react';
import { useSelector } from 'react-redux';


export default function Websocekt() {
  const socket = new WebSocket('wss://ws.finnhub.io?token=bqer03frh5rashj925lg');
  const stock = useSelector(state => state.stock);

  socket.addEventListener('open', function (event) {
    console.log('Connect!');

    socket.send(JSON.stringify({'type':'subscribe', 'symbol': stock.symbol}));
  });

  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    if(event.data.type === "ping"){
      unsubscribe(stock.symbol);
    }
  });

  var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}));
    console.log('Disconnect !');
  }
  return(
    <></>
  );
}
