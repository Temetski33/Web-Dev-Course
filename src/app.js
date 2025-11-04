import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;


// mock-data

const cats = [
  {
    cat_id: 1,
    name: "Kisu",
    birthdate: '2019-03-08',
    weight: 7,
    owner: "Mikkihiiri",
    image: "https://loremflickr.com/320/240/cat",
},
{
    cat_id: 2,
    name: "Kisuli",
    birthdate: '2019-04-08',
    weight: 5,
    owner: "Mikkihiiri",
    image: "https://loremflickr.com/320/240/cat3",
}
];

// Web sivusto tarjoillaan public-kansiosta
//app.use('sivusto', express.static('public')); // aliosoite /sivusto
// tai palvelimen juuri /
app.use(express.static('public'));

// '/api'-polun juuri
app.get('/api/v1', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: "toimii"};
  response.send(responseData);
})

// Cats endpoints

app.get('/api/v1/cats', (req, res) => {
  res.json(cats)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
