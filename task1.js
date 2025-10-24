// F = (C * 9/5) + 32, K = C + 273.15

const degreeC = prompt('Input temperature (C) to convert: ');

const degreeF = (degreeC * 9) / 5 + 32;
const degreeK = degreeC * 1 + 273.15;

const outputElement = document.querySelector('main');

outputElement.innerText = `${degreeC} in Celsius is ${degreeF} in Fahrenheit.`;
outputElement.innerText += '\n';
outputElement.innerText += `${degreeC} in Celsius is ${degreeK} in Kelvin.`;
