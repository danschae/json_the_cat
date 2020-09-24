const request = require('request');
const args = process.argv.slice(2);
let url = ` https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log("error", error);
  } 
  const data = JSON.parse(body);
   if (data[0] === undefined) {
    return console.log("breed not found")
  } else {
    return console.log(data[0]);
  }
});
