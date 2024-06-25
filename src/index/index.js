import { invokeMainPageDom } from "./mainPage"
import { invokeImages } from "../misMods/invokeImagesDom"
import { slider } from "../slider/sliderDom"
import { getDetails } from "../displayWeather/fetchDetails"
import { handleSearch } from "../searchBar/searchBar"
import day from "../images/dayTime.png"
import night from "../images/nightTime.png"
import "./index.css"
invokeMainPageDom()
slider()
getDetails()
invokeImages()
const searchInput = document.getElementById("searchBar")
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch(searchInput)
  }
})
const darkModeSwitch = document.getElementById("darkModeSwitch")
darkModeSwitch.addEventListener("change", function () {
  if (darkModeSwitch.checked) {
    document.body.classList.add("darkmode")
  } else {
    document.body.classList.remove("darkmode")
  }
})
