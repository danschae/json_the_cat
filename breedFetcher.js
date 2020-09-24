const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = ` https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null)
    } 
    const data = JSON.parse(body);
     if (data[0] === undefined) {
      return callback("breed not found")
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { 
  fetchBreedDescription
 };