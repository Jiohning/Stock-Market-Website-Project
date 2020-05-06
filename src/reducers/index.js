import produce from 'immer';

const initialState = {
  exchage: [],
  stocks: [],
};
const reducer = produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SELECT_EXCHANGE':
      state.exchange.push(action.payload);
      break;
    case 'SET_STOCKS':
      state.stocks.push(action.payload);
      break;
    default:
      break;
  }
}, initialState);

export default reducer;