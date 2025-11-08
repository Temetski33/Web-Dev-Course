let movies = [];

let iterations = prompt('Enter the number of movies you want to rate: ');
iterations = Number(iterations);

function addMovies() {
  for (let index = 1; index <= iterations; index++) {
    const input1 = prompt('Name: ');
    let input2 = prompt('Rating: ');
    input2 = Number(input2);

    const movie = {name: input1, rating: input2};
    movies.push(movie);
  }
}

function printMovies() {
  const outputElement = document.getElementById('output');

  movies.sort((a, b) => Number(b.rating) - Number(a.rating));

  outputElement.innerText = 'MOVIES LIST\n';

  for (const movie of movies) {
    outputElement.innerText +=
      'Movie: ' + movie.name + ' (rating: ' + movie.rating + ')\n';
  }

  outputElement.innerText += 'Highest ratest movie: ' + movies[0].name;
}

addMovies();
printMovies();
