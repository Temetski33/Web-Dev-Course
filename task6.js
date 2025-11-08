let integer = prompt('Input a positive number: ');
integer = Number(integer);

const outputElement = document.getElementById('output');

if (Number.isNaN(integer)) {
  outputElement.innerText = `Wrong input! Refresh the page to try again.\n`;
} else if (!Number.isInteger(integer)) {
  outputElement.innerText = `Do not input decimals. Refresh the page to try again.\n`;
} else {
  evaluateScore();
}

function evaluateScore() {
  outputElement.innerText += `Enter a positive integer: ${integer}\n \n`;

  if (integer > 0) {
    outputElement.innerText += `Multiplication Table:`;
    createTable();
  } else {
    outputElement.innerText +=
      'Your input was 0 or negative. Refresh the page and input a positive number.';
  }
}

function createTable() {
  let html = '<table>';
let row = 1;
let column = 1;
let product = 0;

for (let a = 1; a <= integer; a++) {
  html += '<tr>';
  for (let b = 1; b <= integer; b++) {
    product = column * row;
    html += `<td>${product}</td>`;
    row++;
  }
  html += '</tr>';
  column++;
  row = 1;
}

html += '</table>';

document.getElementById('table-container').innerHTML = html;
}
