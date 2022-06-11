/* variables */
const btn = document.querySelector(".btn");
const formControl = document.querySelector(".form-control");
const resultList = document.querySelector(".results-list");
let input;

/* functions */
/* a function for displaying 10 results */
async function showTenResults(input, fetchApi, fillDataList, appendTenResults) {
  let companyFetchURL;
  let additionalData;
  let dataList = [];

  resultList.innerHTML = loaderHTML;

  let fetchURL = baseURL + queryURL + `${input}` + nasdaqURL;

  let data = await fetchApi(fetchURL);

  /* can't use forEach (high-order function) when doing async fetch inside, so for await needed */
  for await (let resultObj of data) {
    companyFetchURL = baseURL + companyURL + `${resultObj.symbol}`;
    additionalData = await fetchApi(companyFetchURL);
    /* found this solution by stackOverFlow - if additionalData.profile returned from
    the server as undefined, continue to the next iteration of the loop */
    if (typeof additionalData.profile === "undefined") {
      continue;
    }
    /* filling the data */
    fillDataList(dataList, resultObj, additionalData);
  }
  /* appending to the DOM */
  appendTenResults(dataList);
}

function enterInput() {
  /* when there is an input */
  if (formControl.value !== "") {
    input = formControl.value;
  }
}

/* event listeners */
/* when changing - entering an input */
formControl.addEventListener("change", enterInput);
/* when clicking on the is button */
btn.addEventListener("click", () =>
  showTenResults(input, fetchApi, fillDataList, appendTenResults)
);
