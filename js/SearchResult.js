/* search result class */
class SearchResult {
  /* search result class constructor */
  constructor(resultElement) {
    this.resultList = resultElement;
  }
  /* rendering the results */
  renderResults({ companies }) {
    const fragment = new DocumentFragment();
    const newUl = document.createElement("ul");
    if (companies.length === 0) {
      this.resultList.innerHTML = "";
      const noResults = document.createElement("li");
      noResults.classList.add("ten-res-error");
      /* error checking */
      noResults.innerText = noResErrorMsg;
      newUl.append(noResults);
    } else {
      for (let i = 0; i < companies.length; i++) {
        this.resultList.innerHTML = "";
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
        newImg.src = companies[i].img;
        newImg.alt = companies[i].name;
        newImg.classList.add("img-size");
        newLink.classList.add("link");
        newLink.href = `company.html?symbol=${companies[i].symbol}`;
        newLink.target = "_blank";
        newLink.innerText = `${companies[i].name}`;
        newSpanSymbol.innerText = `\u00A0\u00A0\u00A0(${companies[i].symbol})\u00A0`;
        newSpanSymbol.classList.add("comp-symbol");

        /* green or red */
        if (companies[i].price > 0) {
          newSpan.innerText = "(+" + companies[i].price + "%)";
          newSpan.classList.add("green");
        } else {
          newSpan.innerText = "(" + companies[i].price + "%)";
          newSpan.classList.add("red");
        }

        newDiv.classList.add("li-divider");
        newLi.classList.add("flex");
        newLi.classList.add("company-link");
        newLi.append(newImg, newLink, newSpanSymbol, newSpan);
        fragment.append(newDiv, newLi);
      }
    }
    newUl.append(fragment);
    this.resultList.append(newUl);
  }
}
