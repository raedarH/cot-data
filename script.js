'use strict';

const url = 'https://raedarh.github.io/cot-data/data.json';

const primaryCurr = document.querySelector('#primary-currency');

let date = document.querySelector('#date');
let primLongsChange = document.querySelector('#prim-longs-change');
let primShortsChange = document.querySelector('#prim-shorts-change');
let primNetPos = document.querySelector('#prim-net-pos');

let eurofxEl = document.querySelector('#eurofx');
let usdfxEl = document.querySelector('#usdfx');

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const rawData = JSON.parse(this.responseText);

    console.log(Object.keys(rawData).length);

    for (let index = 0; index < Object.keys(rawData).length; index++) {
      console.log(rawData[index]);

      if (rawData[index].name.includes('EURO FX')) {
        eurofxEl.innerHTML += `<div>${rawData[index].date}</div>`;
        eurofxEl.innerHTML += `<div>${rawData[index].long}</div>`;
        eurofxEl.innerHTML += `<div>${rawData[index].short}</div>`;
        eurofxEl.innerHTML += `<div>${rawData[index].longChange}</div>`;
        eurofxEl.innerHTML += `<div>${rawData[index].shortChange}</div>`;
        eurofxEl.innerHTML += `<div>${rawData[index].netPositions}</div>`;
      } else if (rawData[index].name.includes('USD INDEX')) {
        usdfxEl.innerHTML += `<div>${rawData[index].date}</div>`;
        usdfxEl.innerHTML += `<div>${rawData[index].long}</div>`;
        usdfxEl.innerHTML += `<div>${rawData[index].short}</div>`;
        usdfxEl.innerHTML += `<div>${rawData[index].longChange}</div>`;
        usdfxEl.innerHTML += `<div>${rawData[index].shortChange}</div>`;
        usdfxEl.innerHTML += `<div>${rawData[index].netPositions}</div>`;
      }
    }
  }
};
xhttp.open('GET', url, true);
xhttp.send();
