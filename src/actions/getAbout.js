import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/stock/profile2';
const API_KEY = 'bqer03frh5rashj925lg';

export default function getPrice(symbol){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      symbol: symbol,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_ABOUT',
        payload: data
      });
    });
  };
}