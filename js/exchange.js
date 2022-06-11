/* variables */
const btn = document.querySelector(".btn");
const formControl = document.querySelector(".form-control");
const resultList = document.querySelector(".results-list");
let input;

/* functions */
/* a function for displaying 10 results */
async function showTenResults(input, fetchApi, fillDataList, appendTenResults) {
  let dataList = [];

  resultList.innerHTML = loaderHTML;

  let fetchURL = baseURL + queryURL + `${input}` + nasdaqURL;

  let data = await fetchApi(fetchURL);

  for (let resultObj of data) {
    /* filling the data */
    fillDataList(dataList, resultObj);
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
