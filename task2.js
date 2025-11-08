let numbers = [];

for (let index = 1; index <= 5; index++) {
  let input1 = prompt('Enter Number: ');
  numbers.push(input1);
}

console.log('Numbers: ', numbers);
console.log('Length of numbers: ', numbers.length);

let input2 = prompt('Enter a Number to Search: ');

if (numbers.includes(input2)) {
  console.log(`Number ${input2} is found in the array.`);
} else {
  console.log(`Number ${input2} is not found in the array.`);
}

numbers.pop();
console.log('Updated Numbers: ', numbers);

console.log('Sorted Numbers: ', numbers);


