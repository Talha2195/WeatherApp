function createImage(body, element, id, classs, altText, src) {
  const container = document.querySelector(body)
  const content = document.createElement(element)
  content.setAttribute("id", id)
  content.setAttribute("class", classs)
  content.setAttribute("alt", altText)
  content.setAttribute("src", src)
  container.appendChild(content)
}
export { createImage }
