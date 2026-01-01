const convertToCelsius = function(fahr) {
  let cels = 5 / 9 * (fahr - 32);
  cels = cels.toFixed(1);
  cels = parseFloat(cels);
  return cels;
};

const convertToFahrenheit = function(cels) {
  let fahr = 9 / 5 * cels + 32;
  fahr = fahr.toFixed(1);
  fahr = parseFloat(fahr);
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
