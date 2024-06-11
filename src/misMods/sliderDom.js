function sliderDom(body, element, id, classs, text) {
  const container = document.querySelector(body)
  const content = document.createElement(element)
  content.setAttribute("id", id)
  content.setAttribute("class", classs)
  content.textContent = text
  container.appendChild(content)
}
export { sliderDom }
