const express = require('express');
const { tweetUpload, tweetdelate, tweetupadate, tweetFetch } = require('../controller/tweetController');
const tokenValidation = require('../middleware/tokenValidation');

const tweet = express.Router();
tweet.get('/all-data', tokenValidation, tweetFetch);
tweet.post('/', tokenValidation, tweetUpload);
tweet.put('/:id', tokenValidation, tweetupadate);
tweet.delete('/:id', tokenValidation, tweetdelate);

module.exports = tweet;