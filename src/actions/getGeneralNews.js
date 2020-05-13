import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/news';
const API_KEY = 'bqer03frh5rashj925lg';


export default function getCompanyNews(){
  return (dispatch) => {

    axios.get(API_URL, {params: {
      category: 'general',
      token: API_KEY
    }}).then(({data}) => {
      dispatch({
        type: 'GET_GENERAL_NEWS',
        payload: data
      });
    });
  };
}