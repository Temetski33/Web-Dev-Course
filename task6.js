let movies = [];

const iterations = 3;

for (let index = 1; index <= iterations; index++) {
  const input1 = prompt('Name: ')
  const input2 = prompt('Rating: ')
  const movie = {name: input1, rating: input2}
  movies.push(movie)

}
