export function selectStock(stock){
  return {
    type: 'STOCK_SELECT',
    payload: stock
  };
}