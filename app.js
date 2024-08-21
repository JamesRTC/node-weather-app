const request = require("request");

const url =
  "https://api.weatherstack.com/current?access_key=284f334f688bfdd999f9eb5902b2ffda&query=New%20York";

request({ url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(
    "it is currently " +
      data.temperature +
      " degrees but it feels like " +
      data.feelslike +
      " degrees out"
  );
});
