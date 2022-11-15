var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var axios = require('axios');
const { useParams } = require('react-router-dom/cjs/react-router-dom.min');

app.use(cors());
app.use(bodyParser.json());

//Create your endpoints HERE

//Route that calls the dog Api and returns a random dog in json format.
app.get('/random', (req, res) => {
  axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  })
    .then(function (response) {
      res.send(response.status, response.data);
    });
});

//Route that calls the dog Api and returns all breeds in json format.
app.get('/breeds', (req, res) => {
  axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/list/all'
  })
    .then(function (response) {
      res.send(response.status, response.data);
    });
});

//Route that calls the dog api and read a query string parameter in order to get a random image of a breed.
app.get('/randomBreed', (req, res) => {
  axios({
    method: 'get',
    url: 'https://dog.ceo/api/breed/' + req.query.breed + '/images/random'
  })
    .then(function (response) {
      res.send(response.status, response.data);
    });
});

app.listen(8001, function () {
  console.log('App running on port 8001');
});