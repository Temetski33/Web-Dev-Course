const numbers = [4, 5, 1, 67, 22, 3, 72];

function sortArray(array) {
  const newArray = array.sort((a, b) => a - b);
  return newArray;
}

console.log(sortArray(numbers));
