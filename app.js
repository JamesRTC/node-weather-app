const request = require("request");

const url =
  "https://api.weatherstack.com/current?access_key=284f334f688bfdd999f9eb5902b2ffda&query=karatina";

const geocodingURL =
  "https://api.mapbox.com/search/geocode/v6/forward?q=karatina&worldview=cn&access_token=pk.eyJ1IjoiamFtZXNydGMwIiwiYSI6ImNtMDQ3MmVpMTA2cnUyanM0MmRvM2puYWUifQ.bhijM8QPLfFKic9GbolrYw&limit=1";

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather service");
  } else if (response.body.error) {
    console.log("unable to find location");
  } else {
    const data = response.body.current;
    console.log(
      "it is currently " +
        data.temperature +
        " degrees but it feels like " +
        data.feelslike +
        " degrees out"
    );
  }
});

request({ url: geocodingURL, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to location service");
  } else if (response.body.features.length === 0) {
    console.log("unable to find location");
  } else {
    const data = response.body.features[0].properties.coordinates;
    const latitude = data.latitude;
    const longitude = data.longitude;
    console.log(latitude, longitude);
  }
});
