let movies = [];

let iterations = prompt('Enter the number of movies you want to rate: ');
iterations = Number(iterations);

function addMovies() {
  for (let index = 1; index <= iterations; index++) {
    const input1 = prompt('Name: ');
    const input2 = prompt('Rating: ');
    const movie = {name: input1, rating: input2};
    movies.push(movie);
  }
}

addMovies();

const outputElement = document.getElementById('output');

for (const movie of movies) {
  outputElement.innerText +=
    'Movie: ' + movie.name + ' (rating: ' + movie.rating + ')\n';
}
