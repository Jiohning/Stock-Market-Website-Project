import React from 'react';
import TopNav from '../components/TopNav';
import Detail from '../components/StockDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const { description } = useParams();
  const stock = useSelector(state => state.stocks[description]);

  return(
    <>
      <TopNav/>
      <Detail data = {stock}/>
    </>
  );
}

export default DetailPage;