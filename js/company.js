/* variables */
/* only the symbol by splitting the url */
const symbol = window.location.search.split("=")[1];
const loader = document.querySelector(".loader");
const companyImg = document.querySelector(".company-img");
const companyName = document.querySelector(".company-name");
const description = document.querySelector(".desc");
const companyStockSub = document.querySelector(".company-stock-subtitle");
const chart = document.getElementById("myChart");
const loaderChart = document.querySelector(".loader-chart");

/* functions */
/* a function for displaying company information */
async function getCompanyProfile(symbol, fetchApi, appendCompanyProfile) {
  loader.innerHTML = loaderHTML;

  let fetchURL = baseURL + companyURL + `${symbol}`;
  let data = await fetchApi(fetchURL);
  loader.innerHTML = "";
  /* appending to the DOM */
  appendCompanyProfile(data);
}

/* a function for the chart - history of stock */
async function historyOfStock(
  symbol,
  fetchApi,
  filterData,
  sortData,
  displayChartJS
) {
  loaderChart.innerHTML = loaderHTML;

  let fetchHistoricalURL = baseURL + historicalURL + `${symbol}?serietype=line`;

  let data = await fetchApi(fetchHistoricalURL);

  loaderChart.innerHTML = "";
  /* filter and then sort the data */
  let filteredData = filterData(data);
  let sortedFilteredData = sortData(filteredData);
  /* display the chart */
  displayChartJS(sortedFilteredData);
}

/* function calling */
getCompanyProfile(symbol, fetchApi, appendCompanyProfile);
historyOfStock(symbol, fetchApi, filterData, sortData, displayChartJS);
