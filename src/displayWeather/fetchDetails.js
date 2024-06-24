async function getDetails() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=210f9da036bd49c28bb94410242206&q=India",
    { mode: "cors" }
  )
  const weatherData = await response.json()
  console.log(weatherData)
}
export { getDetails }
