async function dataHandler() {
  const endpoint1 = '/api/sea_info';
  const request1 = await fetch(endpoint1);
  const SeaInfo = await request1.json();

  console.log(SeaInfo);
}
dataHandler();