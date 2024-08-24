const yargs = require("yargs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}

// yargs.command({
//   command: "getWeather",
//   describe: "get weather for location",
//   builder: {
//     location: {
//       describe: "weather for location",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler(argv) {
//     if (argv.location) {
//       geocode(argv.location, (error, data) => {
//         if (error) {
//           return console.log(error);
//         }

//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//           if (error) {
//             return console.log(error);
//           }
//           console.log(data.location);
//           console.log(forecastData);
//         });
//       });
//     }
//   },
// });
