/* appending 10 results to the DOM */
function appendTenResults(dataList) {
  const fragment = new DocumentFragment();
  const newUl = document.createElement("ul");
  if (dataList.length === 0) {
    resultList.innerHTML = "";
    const noResults = document.createElement("li");
    noResults.classList.add("ten-res-error");
    /* error checking */
    noResults.innerText = noResErrorMsg;
    newUl.append(noResults);
  } else {
    for (let i = 0; i < dataList.length; i++) {
      resultList.innerHTML = "";
      const newLi = document.createElement("li");
      const newLink = document.createElement("a");
      const newSpanSymbol = document.createElement("span");
      const newDiv = document.createElement("div");
      const newImg = document.createElement("img");
      const newSpan = document.createElement("span");

      /* if the image not displaying replace it with a default image */
      newImg.setAttribute(
        "onerror",
        "this.onerror=null;this.src=imgDefaultSrc;"
      );
      newImg.src = dataList[i].img;
      newImg.alt = dataList[i].name;
      newImg.classList.add("img-size");
      newLink.classList.add("link");
      newLink.href = `company.html?symbol=${dataList[i].symbol}`;
      newLink.target = "_blank";
      newLink.innerText = `${dataList[i].name}`;
      newSpanSymbol.innerText = `\u00A0\u00A0\u00A0(${dataList[i].symbol})\u00A0`;
      newSpanSymbol.classList.add("comp-symbol");
      /* green or red */
      if (dataList[i].price > 0) {
        colorToGreen(newSpan, dataList[i]);
      } else {
        colorToRed(newSpan, dataList[i]);
      }

      newDiv.classList.add("li-divider");
      newLi.classList.add("flex");
      newLi.classList.add("company-link");
      newLi.append(newImg, newLink, newSpanSymbol, newSpan);
      fragment.append(newDiv, newLi);
    }
  }
  newUl.append(fragment);
  resultList.append(newUl);
}
/* setting color functions */
function colorToGreen(newSpan, dataElement) {
  newSpan.innerText = "(+" + dataElement.price + "%)";
  newSpan.classList.add("green");
}

function colorToRed(newSpan, dataElement) {
  newSpan.innerText = "(" + dataElement.price + "%)";
  newSpan.classList.add("red");
}
