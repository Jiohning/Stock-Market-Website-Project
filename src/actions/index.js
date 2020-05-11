export function selectExchange(item){
  return (dispatch) => {
    dispatch({ 
      type: 'SELECT_EXCHANGE', payload: item
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
