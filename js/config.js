const baseURL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com`;
const queryURL = `/api/v3/search?query=`;
const nasdaqURL = `&limit=10&exchange=NASDAQ`;
const companyURL = `/api/v3/company/profile/`;
const historicalURL = `/api/v3/historical-price-full/`;
const marqueeURL = `/api/v3/quotes/nasdaq`;
const loaderHTML = `<div class="spinner-border" role="status"><span class="visually-hidden"></span></div>`;
let fetchMarqueeURL = baseURL + marqueeURL;
/* presenting a subset of the items so the browser will not stuck */
const DATA_SUBSET_LENGTH = 1500;
const pastLimitDate = "01/26/1994";
