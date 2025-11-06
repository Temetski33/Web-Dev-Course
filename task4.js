let score = prompt('Input your score: ');
score = Number(score)



const outputElement = document.querySelector('main');

if (Number.isNaN(score)) {
  outputElement.innerText = `Wrong input! Refresh the page to try again.\n`;
}

outputElement.innerText = `The input is ${score}.\n`;

if (score >= 0 && score <= 39) {
  outputElement.innerText += "The grade is 0";
} else if (score >= 40 && score <= 51) {
  outputElement.innerText += "The grade is 1";
} else if (score >= 52 && score <= 63) {
  outputElement.innerText += "The grade is 2";
} else if (score >= 64 && score <= 75) {
  outputElement.innerText += "The grade is 3";
} else if (score >= 76 && score <= 87) {
  outputElement.innerText += "The grade is 4";
} else if (score >= 88 && score <= 99) {
  outputElement.innerText += "The grade is 5";
} else {
  outputElement.innerText += "Score is out of range. Refresh page to input again."
}

