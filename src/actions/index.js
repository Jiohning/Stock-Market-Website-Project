export function selectExchange(code){
  return (dispatch) => {
    dispatch({ 
      type: 'SELECT_EXCHANGE', payload: code
    });
  };
}

export function selectStock(item){
  return (dispatch) => {
    dispatch({ 
      type: 'SELECT_STOCK', payload: item
    });
  };
}
