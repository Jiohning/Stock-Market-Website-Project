import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/stock/candle';
const API_KEY = 'bqer03frh5rashj925lg';

export default function getCandle(symbol, from, to){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      symbol: symbol,
      resolution: 1,
      from: from,
      to: to,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_CANDLE',
        payload: data
      });
    });
  };
}