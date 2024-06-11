import { sliderDom } from "../misMods/sliderDom"
function slider() {
  sliderDom("#bottomDiv", "div", "mainControlDiv")
  sliderDom("#mainControlDiv", "div", "subControlDiv")
  sliderDom("#bottomDiv", "div", "sliderContainer")
  /*********************************************************/
  sliderDom("#subControlDiv", "a", "prev", "", "<")
  sliderDom("#subControlDiv", "span", "dotOne", "dot")
  sliderDom("#subControlDiv", "span", "dotTwo", "dot")
  sliderDom("#subControlDiv", "span", "dotThree", "dot")
  sliderDom("#subControlDiv", "span", "dotFour", "dot")
  sliderDom("#subControlDiv", "span", "dotFive", "dot")
  sliderDom("#subControlDiv", "span", "dotSix", "dot")
  sliderDom("#subControlDiv", "a", "next", "", ">")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementOne", "element")
  sliderDom("#elementOne", "p", "timeOne", "time", "24")
  sliderDom("#elementOne", "p", "tempOne", "temp", "24")
  sliderDom("#elementOne", "p", "signOne", "sign", "F")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementTwo", "element")
  sliderDom("#elementTwo", "p", "timeTwo", "time", "24")
  sliderDom("#elementTwo", "p", "tempTwo", "temp", "24")
  sliderDom("#elementTwo", "p", "signTwo", "sign", "F")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementThree", "element")
  sliderDom("#elementThree", "p", "timeThree", "time", "24")
  sliderDom("#elementThree", "p", "tempThree", "temp", "24")
  sliderDom("#elementThree", "p", "signThree", "sign", "F")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementFour", "element")
  sliderDom("#elementFour", "p", "timeFour", "time", "24")
  sliderDom("#elementFour", "p", "tempFour", "temp", "24")
  sliderDom("#elementFour", "p", "signFour", "sign", "F")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementFive", "element")
  sliderDom("#elementFive", "p", "timeFive", "time", "24")
  sliderDom("#elementFive", "p", "tempFive", "temp", "24")
  sliderDom("#elementFive", "p", "signFive", "sign", "F")
  /*********************************************************/
  sliderDom("#sliderContainer", "div", "elementSix", "element")
  sliderDom("#elementSix", "p", "timeSix", "time", "24")
  sliderDom("#elementSix", "p", "tempSix", "temp", "24")
  sliderDom("#elementSix", "p", "signSix", "sign", "F")
}
export { slider }
