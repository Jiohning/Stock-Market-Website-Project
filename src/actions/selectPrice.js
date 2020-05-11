import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/quote';
const API_KEY = 'bqer03frh5rashj925lg';

export default function selectPrice(symbol){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'SELETE_PRICE',
        payload: data
      });
    });
  };
}