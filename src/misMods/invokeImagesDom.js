import { invokeImage } from "./invokeImages"
import light from "../images/lightMode.png"
import dark from "../images/darkMode.png"
function invokeImages() {
  let images = [
    ["lightMode", light],
    ["darkMode", dark],
  ]
  images.forEach(invokeImage)
}
export { invokeImages }
