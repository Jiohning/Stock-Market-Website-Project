import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/company-news';
const API_KEY = 'bqer03frh5rashj925lg';


export default function news(symbol, from, to){
  return (dispatch) => {
    axios.get(API_URL, {params: {
      symbol: symbol,
      from: from,
      to: to,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'NEWS',
        payload: data
      });
    });
  };
}