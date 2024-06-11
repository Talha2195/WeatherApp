function createImage(body, element, id, classs, altText) {
  const container = document.querySelector(body)
  const content = document.createElement(element)
  content.setAttribute("id", id)
  content.setAttribute("class", classs)
  content.setAttribute("alt", altText)
  container.appendChild(content)
}
export { createImage }
