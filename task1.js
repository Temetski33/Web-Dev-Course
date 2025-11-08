const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Fruits: ', fruits);
console.log('Length of fruits: ', fruits.length);
console.log('Element at index 2: ', fruits[2]);
console.log('Last Element of Fruits: ', fruits.at(-1));

let vegetables = [];

for (let index = 1; index <= 3; index++) {
  let veggie = prompt('Input a vegetable: ');
  vegetables.push(veggie)
}

console.log('Vegetables: ', vegetables);
console.log('Length of vegetables: ', vegetables.length);

