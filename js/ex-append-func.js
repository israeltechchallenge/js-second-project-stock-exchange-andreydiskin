/* appending 10 results to the DOM */
function appendTenResults(dataList) {
  const fragment = new DocumentFragment();
  const newUl = document.createElement("ul");

  for (let i = 0; i < dataList.length; i++) {
    resultList.innerHTML = "";
    const newLi = document.createElement("li");
    const newLink = document.createElement("a");
    const newDiv = document.createElement("div");

    newLink.classList.add("link");
    newLink.href = `company.html?symbol=${dataList[i].symbol}`;
    newLink.target = "_blank";
    newLink.innerText = `${dataList[i].name} (${dataList[i].symbol})`;
    newDiv.classList.add("li-divider");
    newLi.classList.add("flex");
    newLi.classList.add("company-link");
    newLi.append(newLink);
    fragment.append(newDiv, newLi);
  }
  newUl.append(fragment);
  resultList.append(newUl);
}
