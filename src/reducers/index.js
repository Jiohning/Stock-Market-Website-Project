import produce from 'immer';

const initialState = {
  exchanges: [
    {
        "code": "mutualFund",
        "currency": "USD",
        "name": "US Mutual funds"
    },
    {
        "code": "indices",
        "currency": "",
        "name": "World Indices"
    },
    {
        "code": "US",
        "currency": "USD",
        "name": "US exchanges"
    },
    {
        "code": "KL",
        "currency": "MYR",
        "name": "BURSA MALAYSIA"
    },
    {
        "code": "KQ",
        "currency": "KRW",
        "name": "KOREA EXCHANGE (KOSDAQ)"
    },
    {
        "code": "ST",
        "currency": "SEK",
        "name": "NASDAQ OMX NORDIC"
    },
    {
        "code": "DB",
        "currency": "AED",
        "name": "DUBAI FINANCIAL MARKET"
    },
    {
        "code": "SN",
        "currency": "CLP",
        "name": "SANTIAGO STOCK EXCHANGE"
    },
    {
        "code": "SG",
        "currency": "EUR",
        "name": "BOERSE STUTTGART"
    },
    {
        "code": "MC",
        "currency": "EUR",
        "name": "BOLSA DE MADRID"
    },
    {
        "code": "MI",
        "currency": "EUR",
        "name": "MARKET FOR INVESTMENT VEHICULES"
    },
    {
        "code": "CN",
        "currency": "CAD",
        "name": "CANADIAN NATIONAL STOCK EXCHANGE"
    },
    {
        "code": "HM",
        "currency": "EUR",
        "name": "HANSEATISCHE WERTPAPIERBOERSE HAMBURG"
    },
    {
        "code": "AX",
        "currency": "AUD",
        "name": "ASX - ALL MARKETS"
    },
    {
        "code": "BO",
        "currency": "INR",
        "name": "BSE LTD"
    },
    {
        "code": "SR",
        "currency": "SAR",
        "name": "SAUDI STOCK EXCHANGE"
    },
    {
        "code": "RG",
        "currency": "EUR",
        "name": "NASDAQ OMX RIGA"
    },
    {
        "code": "L",
        "currency": "GBP",
        "name": "LONDON STOCK EXCHANGE"
    },
    {
        "code": "IC",
        "currency": "ISK",
        "name": "NASDAQ OMX ICELAND"
    },
    {
        "code": "JK",
        "currency": "IDR",
        "name": "INDONESIA STOCK EXCHANGE"
    },
    {
        "code": "SA",
        "currency": "BRL",
        "name": "Sao Paolo"
    },
    {
        "code": "CO",
        "currency": "DKK",
        "name": "OMX NORDIC EXCHANGE COPENHAGEN A/S"
    },
    {
        "code": "IR",
        "currency": "EUR",
        "name": "IRISH STOCK EXCHANGE - ALL MARKET"
    },
    {
        "code": "OL",
        "currency": "NOK",
        "name": "OSLO BORS ASA"
    },
    {
        "code": "NS",
        "currency": "INR",
        "name": "NATIONAL STOCK EXCHANGE OF INDIA"
    },
    {
        "code": "IS",
        "currency": "TRY",
        "name": "BORSA ISTANBUL"
    },
    {
        "code": "SI",
        "currency": "USD",
        "name": "SINGAPORE EXCHANGE"
    },
    {
        "code": "SW",
        "currency": "USD",
        "name": "SWISS EXCHANGE"
    },
    {
        "code": "TW",
        "currency": "TWD",
        "name": "TAIWAN STOCK EXCHANGE"
    },
    {
        "code": "BA",
        "currency": "ARS",
        "name": "BOLSA DE COMERCIO DE BUENOS AIRES"
    },
    {
        "code": "JO",
        "currency": "ZAc",
        "name": "JOHANNESBURG STOCK EXCHANGE"
    },
    {
        "code": "QA",
        "currency": "QAR",
        "name": "QATAR EXCHANGE"
    },
    {
        "code": "SZ",
        "currency": "CNY",
        "name": "SHENZHEN STOCK EXCHANGE"
    },
    {
        "code": "T",
        "currency": "JPY",
        "name": "TOKYO STOCK EXCHANGE-TOKYO PRO MARKET"
    },
    {
        "code": "LS",
        "currency": "EUR",
        "name": "NYSE EURONEXT - EURONEXT LISBON"
    },
    {
        "code": "VI",
        "currency": "EUR",
        "name": "WIENER BOERSE AG DRITTER MARKT (THIRD MARKET)"
    },
    {
        "code": "HE",
        "currency": "EUR",
        "name": "NASDAQ OMX HELSINKI LTD."
    },
    {
        "code": "DU",
        "currency": "EUR",
        "name": "BOERSE DUESSELDORF"
    },
    {
        "code": "HK",
        "currency": "HKD",
        "name": "HONG KONG EXCHANGES AND CLEARING LTD"
    },
    {
        "code": "NZ",
        "currency": "NZD",
        "name": "NEW ZEALAND EXCHANGE LTD"
    },
    {
        "code": "PA",
        "currency": "EUR",
        "name": "NYSE EURONEXT - MARCHE LIBRE PARIS"
    },
    {
        "code": "DE",
        "currency": "EUR",
        "name": "XETRA"
    },
    {
        "code": "BK",
        "currency": "THB",
        "name": "STOCK EXCHANGE OF THAILAND"
    },
    {
        "code": "ME",
        "currency": "RUB",
        "name": "MOSCOW EXCHANGE"
    },
    {
        "code": "BD",
        "currency": "HUF",
        "name": "BUDAPEST STOCK EXCHANGE"
    },
    {
        "code": "MX",
        "currency": "MXN",
        "name": "BOLSA MEXICANA DE VALORES (MEXICAN STOCK EXCHANGE)"
    },
    {
        "code": "F",
        "currency": "EUR",
        "name": "DEUTSCHE BOERSE AG"
    },
    {
        "code": "KS",
        "currency": "KRW",
        "name": "KOREA EXCHANGE (STOCK MARKET)"
    },
    {
        "code": "V",
        "currency": "CAD",
        "name": "TSX VENTURE EXCHANGE - NEX"
    },
    {
        "code": "NE",
        "currency": "CAD",
        "name": "AEQUITAS NEO EXCHANGE"
    },
    {
        "code": "CR",
        "currency": "",
        "name": "CARACAS STOCK EXCHANGE"
    },
    {
        "code": "TL",
        "currency": "EUR",
        "name": "NASDAQ OMX TALLINN"
    },
    {
        "code": "AT",
        "currency": "EUR",
        "name": "ATHENS EXCHANGE S.A. CASH MARKET"
    },
    {
        "code": "PA",
        "currency": "EUR",
        "name": "NYSE EURONEXT - EURONEXT PARIS"
    },
    {
        "code": "TA",
        "currency": "ILa",
        "name": "TEL AVIV STOCK EXCHANGE"
    },
    {
        "code": "AS",
        "currency": "EUR",
        "name": "NYSE EURONEXT - EURONEXT AMSTERDAM"
    },
    {
        "code": "TO",
        "currency": "CAD",
        "name": "TORONTO STOCK EXCHANGE"
    },
    {
        "code": "PR",
        "currency": "CZK",
        "name": "PRAGUE STOCK EXCHANGE"
    },
    {
        "code": "SS",
        "currency": "CNY",
        "name": "SHANGHAI STOCK EXCHANGE"
    },
    {
        "code": "BC",
        "currency": "COP",
        "name": "BOLSA DE VALORES DE COLOMBIA"
    },
    {
        "code": "VS",
        "currency": "EUR",
        "name": "NASDAQ OMX VILNIUS"
    },
    {
        "code": "WA",
        "currency": "PLN",
        "name": "WARSAW STOCK EXCHANGE/EQUITIES/MAIN MARKET"
    },
    {
        "code": "BE",
        "currency": "EUR",
        "name": "BOERSE BERLIN"
    },
    {
        "code": "MU",
        "currency": "EUR",
        "name": "BOERSE MUENCHEN"
    },
    {
        "code": "BR",
        "currency": "EUR",
        "name": "NYSE EURONEXT - EURONEXT BRUSSELS"
    },
    {
        "code": "VN",
        "currency": "VND",
        "name": "Vietnam exchanges including HOSE, HNX and UPCOM"
    }
  ],
  stocks: null,
  priceList: null,
  exchange: null,
  stock: null,
  price: null,
  news: null,
  candleData: null,
  term: null,
  loading: false,
};
const reducer = produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SELECT_EXCHANGE':
      state.exchange = action.payload;
      break;
    case 'GET_STOCKS':
      state.stocks = action.payload;
      break;
    case 'SELECT_STOCK':
      state.stock = action.payload;
      break;
    case 'GET_PRICE':
        state.priceList = action.payload;
        break;
    case 'SELETE_PRICE':
        state.price = action.payload;
        break;
    case 'NEWS':
        state.news = action.payload;
        break;
    case 'GET_CANDLE':
        state.candleData = action.payload;
        break;
    case 'SEARCH':
      state.term = action.payload;
      break;
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;