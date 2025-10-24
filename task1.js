console.log('Hello all the worlds');

// F = (C * 9/5) + 32, kelvn + 273.15

const degreeC = prompt('Input temperature (C) to convert: ');
console.log(degreeC);

const degreeF = (degreeC * 9) / 5 + 32;
const degreeK = degreeC + 273.15;

const outputElement = document.querySelector('main');

outputElement.innerText = `${degreeC} in Celsius is ${degreeF} in Fahrenheit.`;
// outputElement.innerText = `${degreeC} in Celsius is ${degreeK} in Kelvin.`;
