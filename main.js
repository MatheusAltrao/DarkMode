function darkmode() {
  let body = document.getElementById('body')
  let button = document.querySelector('button')
  let h1 = document.getElementById('h1')
  let text = document.getElementById('text')
  let social = document.getElementById('social')
  let link = document.getElementById('link')

  list = [body, button, h1, text, social, link]

  list.map(function (element) {
    element.classList.toggle('darkmode')
  })
}
