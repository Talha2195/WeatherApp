import { makeDom } from "../misMods/invokeDom"
import { createImage } from "../misMods/imagesDom"
function invokeMainPageDom() {
  makeDom("body", "div", "mainDiv", "", "")
  makeDom("#mainDiv", "div", "leftDiv")
  /*****************************************************************************************************************************/
  makeDom("#leftDiv", "input", "searchBar", "", "", "Search Location")
  makeDom("#leftDiv", "button", "celcius", "", "C")
  makeDom("#leftDiv", "button", "fahrenheit", "", "F")
  makeDom("#leftDiv", "input", "darkModeSwitch", "checkbox")
  makeDom("#leftDiv", "label", "switchLabel", "", "", "", "", "darkModeSwitch")
  createImage("#switchLabel", "img", "lightMode", "light", "light mode icon")
  createImage("#switchLabel", "img", "darkMode", "dark", "dark mode icon")
  /*****************************************************************************************************************************/
  makeDom("#mainDiv", "div", "middleDiv")
  makeDom("#middleDiv", "p", "searchName")
  makeDom("#middleDiv", "p", "weatherCondition")
  makeDom("#middleDiv", "p", "currentWeather")
  createImage(
    "#middleDiv",
    "img",
    "weatherImg",
    "",
    "current weather Icon",
    "#"
  )
  /*****************************************************************************************************************************/
  makeDom("#mainDiv", "div", "rightDiv")
  makeDom("#rightDiv", "div", "feelsLike")
  makeDom("#feelsLike", "p", "textOne", "", "Feels Like")
  makeDom("#feelsLike", "p", "feelsLikeData")
  makeDom("#rightDiv", "div", "humidity")
  makeDom("#humidity", "p", "textTwo", "", "Humiditiy")
  makeDom("#humidity", "p", "humidityData")
  makeDom("#rightDiv", "div", "chanceOfRain")
  makeDom("#chanceOfRain", "p", "textThree", "", "Chance of Rain")
  makeDom("#chanceOfRain", "p", "chanceOfRainData")
  makeDom("#rightDiv", "div", "windSpeed")
  makeDom("#windSpeed", "p", "textFour", "", "Wind Speed")
  makeDom("#windSpeed", "p", "windSpeedData")
  /*****************************************************************************************************************************/
  makeDom("body", "div", "footerDiv")
  makeDom("#footerDiv", "div", "bottomDiv")
}
export { invokeMainPageDom }
