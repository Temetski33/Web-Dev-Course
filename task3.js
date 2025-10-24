const side1 = prompt('Input first side: ');
const side2 = prompt('Input second side: ');
const side3 = prompt('Input third side: ');

const outputElement = document.querySelector('main');

outputElement.innerText = `${side1} ${side2} ${side3}`;

if (side1 === side2 || side1 === side3) {
  outputElement.innerText = 1;
}
