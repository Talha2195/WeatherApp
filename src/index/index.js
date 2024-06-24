import { invokeMainPageDom } from "./mainPage"
import { invokeImages } from "../misMods/invokeImagesDom"
import { slider } from "../slider/sliderDom"
import { getDetails } from "../displayWeather/fetchDetails"
import { handleSearch } from "../searchBar/searchBar"
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
