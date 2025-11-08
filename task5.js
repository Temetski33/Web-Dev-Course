const numbers = [5, 2, 8, 1, 9];

function sortArray(array, order) {
  let newArray = [];
  if (order === 'asc') {
    newArray = array.sort((a, b) => a - b);
  } else if (order === 'desc') {
    newArray = array.sort((a, b) => b - a);
  } else {
    return 'Invalid input!';
  }

  return newArray;
}

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
