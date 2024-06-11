function makeDom(
  body,
  element,
  id,
  type,
  text,
  placeholder,
  style,
  forr,
  alt,
  classs
) {
  const container = document.querySelector(body)
  const content = document.createElement(element)
  content.setAttribute("id", id)
  content.setAttribute("type", type)
  content.textContent = text
  content.setAttribute("placeholder", placeholder)
  content.setAttribute("style", style)
  content.setAttribute("for", forr)
  content.setAttribute("alt", alt)
  content.setAttribute("class", classs)
  container.appendChild(content)
}
export { makeDom }
