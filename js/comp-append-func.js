/* appending company data to the DOM */
function appendCompanyProfile(data) {
  const newImg = document.createElement("img");
  const newLink = document.createElement("a");
  const newSpan = document.createElement("span");

  newImg.classList.add("img-size");
  newLink.classList.add("link");
  newImg.src = data.profile.image;
  newImg.alt = data.profile.name;
  companyImg.appendChild(newImg);

  /* show industry if exists */
  if (data.profile.industry !== "") {
    newLink.innerText = `${data.profile.companyName}\u00A0(${data.profile.industry})`;
  } else {
    newLink.innerText = `${data.profile.companyName}`;
  }
  newLink.href = data.profile.website;
  /* open on new page */
  newLink.target = "_blank";
  companyName.appendChild(newLink);
  description.innerText = data.profile.description;
  companyStockSub.innerText = "Stock price: $" + data.profile.price + " ";

  /* green or red */
  if (data.profile.changesPercentage > 0) {
    colorToGreen(newSpan, data);
  } else {
    colorToRed(newSpan, data);
  }

  companyStockSub.appendChild(newSpan);
}
/* setting color functions */
function colorToGreen(newSpan, data) {
  newSpan.innerText = "(+" + data.profile.changesPercentage + "%)";
  newSpan.classList.add("green");
}

function colorToRed(newSpan, data) {
  newSpan.innerText = "(" + data.profile.changesPercentage + "%)";
  newSpan.classList.add("red");
}
