const initialState = {
  stocks:[
    {
      name: 'Aurora Cannabis',
      symbol: 'ACB',
      price: 'US$0.7133',
      today: '+3.38%',
      marketcap: '952.29M'
    },
    {
      name: 'Ford',
      symbol: 'F',
      price: 'US$5.06',
      today: '-1.27%',
      marketcap: '20.10B'
    },
    {
      name: 'GE',
      symbol: 'GE',
      price: 'US$6.61',
      today: '-3.36%',
      marketcap: '58.27B'
    },
    {
      name: 'Disney',
      symbol: 'DIS',
      price: 'US$103.11',
      today: '-3.31%',
      marketcap: '186.23B'
    }
  ],
  selected: {
    name: 'Disney',
    symbol: 'DIS',
    price: 'US$103.11',
    today: '-3.31%',
    marketcap: '186.23B'
  }
};

function reducer(state = initialState, action){
  switch(action.type){
    case 'STOCK_SELECT':
      return {
        stocks: state.stocks,
        selected: action.payload
      }
    default:
      return state;
  }
}

export default reducer;