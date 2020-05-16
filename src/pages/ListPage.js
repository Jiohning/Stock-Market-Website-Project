import React from 'react';

import TopNav from '../components/TopNav';
import List from '../components/StockList';
import ErrorMessage from '../components/ErrorMessage';

const ListPage = () => {
  return(
    <>
      <TopNav/>
      <ErrorMessage/>
      <List/>
      
    </>
  );
}

export default ListPage;