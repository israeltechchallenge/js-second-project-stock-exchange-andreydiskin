async function fetchApi(fetchURL) {
  let response = await fetch(fetchURL);
  let data = await response.json();
  return data;
}
