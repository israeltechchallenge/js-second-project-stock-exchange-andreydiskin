/* appending marquee to the DOM */
function appendMarquee(dataListMarquee) {
  const marqueeSpan = document.createElement("span");
  marqueeSpan.classList.add("marquee-span");

  const fragmentMarquee = new DocumentFragment();

  /* DATA_SUBSET_LENGTH - presenting a subset of the items so the browser will not stuck */
  for (let i = 0; i < DATA_SUBSET_LENGTH; i++) {
    const newSpanSymbol = document.createElement("span");
    const newSpanPrice = document.createElement("span");

    newSpanSymbol.innerText = `   ${dataListMarquee[i].symbol} `;
    newSpanSymbol.classList.add("symbol");
    newSpanPrice.innerText = `$${dataListMarquee[i].price}   ` + "\u00A0\u00A0";
    newSpanPrice.classList.add("price");

    fragmentMarquee.append(newSpanSymbol, newSpanPrice);
  }
  marqueeSpan.append(fragmentMarquee);
  marqueeCon.append(marqueeSpan);
}

/* appending 10 results to the DOM */
function appendTenResults(dataList) {
  const fragment = new DocumentFragment();
  const newUl = document.createElement("ul");

  for (let i = 0; i < dataList.length; i++) {
    resultList.innerHTML = "";
    const newLi = document.createElement("li");
    const newLink = document.createElement("a");
    const newSpanSymbol = document.createElement("span");
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const newSpan = document.createElement("span");
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
