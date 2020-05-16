import React from 'react';


export default function Websocekt() {
  const socket = new WebSocket('wss://ws.finnhub.io?token=bqer03frh5rashj925lg');

  socket.addEventListener('open', function (event) {
    console.log('Connect!');

    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}));
  });

  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
  });

  var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
  }
  return(
    <></>
  );
}
