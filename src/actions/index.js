import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/stock/exchange';
const API_KEY = 'bqer03frh5rashj925lg';

export function selectExchange(){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'SELECT_EXCHANGE',
        payload: data
      });
    });
  };
}
