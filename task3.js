let numbers = [];
let userInput;

do {
  userInput = prompt("Enter a number (or 'done' to finish): ");
  const num = Number(userInput);

  if (!Number.isNaN(num) && Number.isInteger(num)) {
    numbers.push(num);
  }
} while (userInput != 'done');

console.log('all numbers ', numbers);

let evenNumbersText = 'Even Numbers: ';
const evenNumbers = [];

for (let i of numbers) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

if (evenNumbers.length === 0) {
  console.log('Even Numbers: None');
} else {
  evenNumbersText += evenNumbers.join(', ');
  console.log(evenNumbersText);
}
