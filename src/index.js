import './index.css';

document.getElementById('output').style.visibility = 'hidden';

document.getElementById('wbd').addEventListener('input', (e) => {
  document.getElementById('output').style.visibility = 'visible';
  let wad = document.getElementById('wad').value;
  let wbd = document.getElementById('wbd').value;
  document.getElementById('sum').innerHTML = ((wad / wbd) * 1000).toFixed(2);
  document.getElementById('karat').innerHTML = ((wad / wbd) * 24).toFixed(2);
  document.getElementById('impurity').innerHTML = wbd - wad;
  document.getElementById('impurity-per-gram').innerHTML = (
    (wbd - wad) /
    wbd
  ).toFixed(3);
  document.getElementById('impurity-per-tola').innerHTML = (
    ((wbd - wad) / wbd) *
    11.664
  ).toFixed(3);
  document.getElementById('impurity-per-ratti').innerHTML = (
    ((wbd - wad) / wbd) *
    96
  ).toFixed(3);
});

document.getElementById('wad').addEventListener('input', (e) => {
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').style.visibility = 'visible';
  let wad = document.getElementById('wad').value;
  let wbd = document.getElementById('wbd').value;
  document.getElementById('sum').innerHTML = ((wad / wbd) * 1000).toFixed(2);
  document.getElementById('karat').innerHTML = ((wad / wbd) * 24).toFixed(2);
  document.getElementById('impurity').innerHTML = wbd - wad;
  document.getElementById('impurity-per-gram').innerHTML = (
    (wbd - wad) /
    wbd
  ).toFixed(3);
  document.getElementById('impurity-per-tola').innerHTML = (
    ((wbd - wad) / wbd) *
    11.664
  ).toFixed(3);
  document.getElementById('impurity-per-ratti').innerHTML = (
    ((wbd - wad) / wbd) *
    96
  ).toFixed(3);
});
