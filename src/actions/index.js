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

export function startLoading() {
  return(dispatch) => {
    dispatch({type:'START_LOADING'});
  }
}

export function endLoading() {
  return(dispatch) => {
    dispatch({type:'END_LOADING'});
  }
}