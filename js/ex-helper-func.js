/* can't use forEach (high-order function) when doing async fetch inside, so for await needed */
function fillDataList(dataList, resultObj, additionalData) {
  dataList.push({
    name: resultObj.name,
    symbol: resultObj.symbol,
    img: additionalData.profile.image,
    price: additionalData.profile.changesPercentage,
  });
}
