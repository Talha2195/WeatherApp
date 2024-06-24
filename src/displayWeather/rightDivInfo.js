async function setRightDiv(name) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=210f9da036bd49c28bb94410242206&q=" +
      name,
    { mode: "cors" }
  )
  const weatherData = await response.json()
  document.getElementById("feelsLikeData").innerHTML =
    weatherData.current.feelslike_c
  document.getElementById("humidityData").innerHTML =
    weatherData.current.humidity
  document.getElementById("chanceOfRainData").innerHTML =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain
  document.getElementById("windSpeedData").innerHTML =
    weatherData.current.wind_kph
}
export { setRightDiv }
