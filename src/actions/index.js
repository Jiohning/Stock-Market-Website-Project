import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1';
const API_KEY = 'bqer03frh5rashj925lg';

export function selectExchange(code){
  return (dispatch) => {
    dispatch({ 
      type: 'SELECT_EXCHANGE', payload: code
    });
  };
}

export function setStocks(code){
  return (dispatch) => {
    axios.get(API_URL, '/stock/symbol', {params: {
      exchange: code,
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'SET_STOCKS',
        payload: data.slice(0,100)
      });
    });
  };
}


export function selectStock(){

}