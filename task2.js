// Distance = √((x2 - x1)^2 + (y2 - y1)^2)

const x1 = prompt('Input X coordinate of the first point: ');
const y1 = prompt('Input Y coordinate of the first point: ');
const x2 = prompt('Input X coordinate of the second point: ');
const y2 = prompt('Input Y coordinate of the second point: ');

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const outputElement = document.querySelector('main');

outputElement.innerText = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance}.`;
