function calculateKelvin() {
  // Gets temperature forecast in Kelvin from user input
  let kelvin = document.getElementById('user_defined_kelvin').value;
  // Converts Kelvin to Celsius
  let celsius = kelvin - 273;
  // Displays Celsius on web page
  document.getElementById('celcius_calculation').innerHTML = celsius;
  // Converts Kelvin to Fahrenheit using Celsius
  let fahrenheit = celsius * (9/5) + 32;
  // Rounds down the Fahrenheit temperature if decimal number is returned
  fahrenheit = (Math.floor(fahrenheit));
  // Displays Fahrenheit on web page
  document.getElementById('fahrenheit_calculation').innerHTML = fahrenheit;
  // Converts Kelvin to Fahrenheit using Celsius
  let newton = celsius * (33/100);
  // Rounds down the newton temperature if decimal number is returned
  newton = (Math.floor(newton));
  // Displays Newton on web page
  document.getElementById('newton_calculation').innerHTML = newton;
};
document.getElementById('calculate_kelvin').addEventListener('click', calculateKelvin);