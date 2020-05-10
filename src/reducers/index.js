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
  stocks: [],
  exchange: null,
  stock: [{
    "description": "APPLE INC",
    "displaySymbol": "AAPL",
    "symbol": "AAPL"
    }],
  price: [{
    "c": 310.13,
    "h": 310.29,
    "l": 304.29,
    "o": 305.64,
    "pc": 303.74,
    "t": 1589096128
    }],
  news: [
    {
        "category": "company",
        "datetime": 1588982400,
        "headline": "Barron's Picks And Pans: Boyd Gaming, Domino's Pizza, Exxon And More",
        "id": 1902133,
        "image": "https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/business-1031754_1920_12.jpg",
        "related": "STK,BLBX,RF,DPZ,XOM,LUV,QQQX,NDAQ,AMT,AAPL,BYD,WFC,AMZN,HGTXU,PHM",
        "source": "benzinga",
        "summary": "This weekend's Barron's shows how to prepare for the resumption of bank mergers.\nOther featured articles offer tips for finding value in real estate stocks and what...",
        "url": "https://www.benzinga.com/media/20/05/15996204/barrons-picks-and-pans-boyd-gaming-dominos-pizza-exxon-and-more"
    },
    {
        "category": "company news",
        "datetime": 1588978804,
        "headline": "Value Screeners Identify Opportunities as Markets Rebound From March Lows",
        "id": 1898184,
        "image": "https://s.yimg.com/uu/api/res/1.2/KxD3LZoHhDNfVxd3QIHfdg--~B/aD00MDA7dz02MDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-us/us.finance.gurufocus/d6975ca949028745abddcc427631f2dd",
        "related": "AAPL",
        "source": "Yahoo",
        "summary": "GuruFocus value screens apply teachings from legends like Graham, Buffett and Lynch Continue reading...",
        "url": "https://finance.yahoo.com/news/value-screeners-identify-opportunities-markets-230004685.html?.tsrc=rss"
    },
    {
        "category": "company",
        "datetime": 1588972440,
        "headline": "Tech Stocks Are Getting Pricey. Here Are 12 Stocks Still Worth Buying — and 1 to Short.",
        "id": 292735,
        "image": "https://images.barrons.com/im-184644/social",
        "related": "AMZN,HPQ,TDOC,LCLP,HPQ,CTXS,MU,XRX,ETSY,APRN,UBER,WDC,UBER,FB,TER,SSFT,MSFT,VCLD,UBER,MICR,LYFT,LRCX,ETSY,NFLX,AAPL",
        "source": "barrons",
        "summary": "The Nasdaq Composite has soared more than 30% in the last six weeks, pushing some stocks into pricey territory.",
        "url": "https://www.barrons.com/articles/tech-stocks-are-getting-pricey-here-are-12-stocks-still-worth-buyingand-1-to-short-51588972462"
    },
    {
        "category": "company news",
        "datetime": 1588971541,
        "headline": "Stocks jump despite a record 20.5M jobs lost in April",
        "id": 1898186,
        "image": "https://s.yimg.com/uu/api/res/1.2/QbLiLF6eRH59oOL4JKi3mg--~B/aD0xNzMwO3c9MzA3NjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-05/08/5eb5c81790a80d675a63acce/5eb5cdcd5f6f656335c2c306_o_U_v3.jpg",
        "related": "AAPL",
        "source": "Yahoo",
        "summary": "Managing Director & Chief U.S. Economist at NatWest Markets Michelle Girard joins Yahoo Finance’s Seana Smith to break down the April jobs report.",
        "url": "https://finance.yahoo.com/video/stocks-jump-despite-record-20-205901750.html?.tsrc=rss"
    },],
  term: null,
};
const reducer = produce((state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SELECT_EXCHANGE':
      state.exchange = action.payload;
      break;
    case 'SET_STOCKS':
      state.stocks.push(action.payload);
      break;
    case 'SELECT_STOCK':
      state.stock.push(action.payload);
      break;
    case 'SET_PRICE':
        state.price.push(action.payload);
        break;
    case 'NEWS':
        state.news = action.payload;
        break;
    case 'SEARCH':
      state.term = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;