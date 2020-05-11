import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/stock/symbol';
const API_KEY = 'bqer03frh5rashj925lg';

export default function getStocks(code){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      exchange: code,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_STOCKS',
        payload: data.slice(0,100)
      });
    });
  };
}
