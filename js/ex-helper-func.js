/* very occasionally there is a case when the server returns data that is not an array
     (object instead of array), so this test is necessary to make sure that the data is an array 
     for no making an error, and fetching again data */
function fillDataListMarquee(dataMarquee, dataListMarquee) {
  try {
    if (!Array.isArray(dataMarquee)) {
      throw "Not an array";
    }
    for (let item of dataMarquee) {
      dataListMarquee.push({
        symbol: item.symbol,
        price: item.price,
      });
    }
  } catch {
    marqueeResults(fetchApi, fillDataListMarquee, appendMarquee);
  }
}

/* can't use forEach (high-order function) when doing async fetch inside, so for await needed */
function fillDataList(dataList, resultObj, additionalData) {
  dataList.push({
    name: resultObj.name,
    symbol: resultObj.symbol,
    img: additionalData.profile.image,
    price: additionalData.profile.changesPercentage,
  });
}
