import React from 'react';
import Container from '@material-ui/core/Container';

import TopNav from './components/TopNav.js';
import StockList from './components/StockList.js';
import StockDetail from './components/StockDetail.js';
import './App.css';

function App() {
  return (
    <div>
      <TopNav/>
      <Container>
        <StockList/>
      </Container>
    </div>
  );
}

export default App;
