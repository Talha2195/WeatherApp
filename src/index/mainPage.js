import { makeDom } from "../misMods/invokeDom"
import { createImage } from "../misMods/imagesDom"
function invokeMainPageDom() {
  makeDom("body", "div", "mainDiv", "", "")
  makeDom("#mainDiv", "div", "leftDiv")
  makeDom("#leftDiv", "input", "searchBar", "", "", "Search Location")
  makeDom("#leftDiv", "button", "celcius", "", "C")
  makeDom("#leftDiv", "button", "fahrenheit", "", "F")
  makeDom("#leftDiv", "input", "darkModeSwitch", "checkbox")
  makeDom("#leftDiv", "label", "switchLabel", "", "", "", "", "darkModeSwitch")
  createImage("#switchLabel", "img", "lightMode", "light", "light mode icon")
  createImage("#switchLabel", "img", "darkMode", "dark", "dark mode icon")
  makeDom("#mainDiv", "div", "middleDiv")
  makeDom("#mainDiv", "div", "rightDiv")
  makeDom("body", "div", "footerDiv")
  makeDom("#footerDiv", "div", "bottomDiv")
}
export { invokeMainPageDom }
