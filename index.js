document.getElementById('output').style.visibility = 'hidden'

const handleButtonClick = () => {
  document.getElementById('output').style.visibility = 'visible'
  let wad = document.getElementById('wad').value
  let wbd = document.getElementById('wbd').value

  const sum = ((wad / wbd) * 1000).toFixed(2)
  const karat = ((wad / wbd) * 24).toFixed(2)
  const impurity = wbd - wad
  const impurityPerGram = ((wbd - wad) / wbd).toFixed(3)
  const impurityPerTola = (((wbd - wad) / wbd) * 11.664).toFixed(3)
  const impurityPerRatti = (((wbd - wad) / wbd) * 96).toFixed(3)

  document.getElementById('sum').innerHTML = sum
  document.getElementById('karat').innerHTML = karat
  document.getElementById('impurity').innerHTML = impurity
  document.getElementById('impurity-per-gram').innerHTML = impurityPerGram
  document.getElementById('impurity-per-tola').innerHTML = impurityPerTola
  document.getElementById('impurity-per-ratti').innerHTML = impurityPerRatti

  const wbp = document.getElementById('wbp').value
  document.getElementById('wap').value = ((sum / 1000) * wbp).toFixed(3)

  const gp = document.getElementById('gp').value
  document.getElementById('gv').value = ((gp / 11.664) * ((sum / 1000) * wbp)).toFixed(2)
}
