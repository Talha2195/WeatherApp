import { setMiddleDiv } from "../displayWeather/middleDivInfo"
import { setRightDiv } from "../displayWeather/rightDivInfo"

function handleSearch(search) {
  const searchTerm = search.value.trim()
  console.log("Search term entered:", searchTerm)
  setMiddleDiv(searchTerm)
  setRightDiv(searchTerm)
}
export { handleSearch }
