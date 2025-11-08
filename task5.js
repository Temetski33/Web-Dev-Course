let integer = prompt('Input a positive number: ');
integer = Number(integer);

const outputElement = document.querySelector('main');

if (Number.isNaN(integer)) {
  outputElement.innerText = `Wrong input! Refresh the page to try again.\n`;
} else if (!Number.isInteger(integer)) {
  outputElement.innerText = `Do not input decimals. Refresh the page to try again.\n`;
} else {
  mainFunc();
}

function mainFunc() {
  outputElement.innerText += `The input is ${integer}\n`;

  if (integer > 0) {
    let counter = 0;
    for (let i = 1; i <= integer; i++) {
      counter = counter + i;
    }
    outputElement.innerText += `The sum of all natural numbers up to your input is ${counter}`;
  } else {
    outputElement.innerText +=
      'Your input was 0 or negative. Refresh the page and input a positive number.';
  }
}
