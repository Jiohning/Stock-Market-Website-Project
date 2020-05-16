import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopNav from '../components/TopNav';
import Detail from '../components/StockDetail';
import ErrorMessage from '../components/ErrorMessage';

const DetailPage = () => {
  const { description } = useParams();
  const stock = useSelector(state => state.stocks[description]);

  return(
    <>
      <TopNav/>
      <ErrorMessage/>
      <Detail data = {stock}/>
    </>
  );
}

export default DetailPage;