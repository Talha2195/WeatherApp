async function setMiddleDiv(place) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=210f9da036bd49c28bb94410242206&q=" +
      place,
    { mode: "cors" }
  )
  const weatherData = await response.json()
  document.getElementById("searchName").innerHTML = weatherData.location.name
  document.getElementById("weatherCondition").innerHTML =
    weatherData.current.condition.text
  document.getElementById("currentWeather").innerHTML =
    weatherData.current.temp_c
  document.getElementById("weatherImg").src = weatherData.current.condition.icon
}
export { setMiddleDiv }
