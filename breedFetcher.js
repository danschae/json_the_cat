const request = require('request');
const args = process.argv.slice(2);
let url = `https://api.thecatapi.com/v1/images/search?breed_id=${args}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("error", error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0]);
  }
});
