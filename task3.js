const side1 = prompt('Input first side: ');
const side2 = prompt('Input second side: ');
const side3 = prompt('Input third side: ');

const outputElement = document.querySelector('main');

outputElement.innerText = `The sides input are ${side1}, ${side2}, and ${side3}.`;
outputElement.innerText += '\n';

if (side1 === side2 && side1 === side3 && side2 === side3) {
  outputElement.innerText += "The traingle is equilateral.";
} else if (side1 === side2 || side1 == side3 || side2 === side3) {
  outputElement.innerText += "The triangle is isosceles.";
} else if (!(side1 === side2) && !(side1 === side3) && !(side2 === side3)) {
  outputElement.innerText += "The triangle is scalene.";
}
