const { log } = console;

// Data definition
const persona = {
  name: "Federico",
  lastname: "Garrone",
  email: "mail@mail.com",
  age: 26,
  isDeveloper: true,
};

// Const definition (HTML elements)
const $ = (e) => {
  return document.querySelector(e)
}
const form = $('#form')
const dataDiv = $('#data-div')

let data = {}

// Form data handle and rendering
form.addEventListener('submit', (e) => {
  e.preventDefault()
  data = Object.fromEntries(
    new FormData(e.target)
  )
  
  if (dataDiv.childElementCount != 0) {
    dataDiv.innerHTML = ''
  }

  const result = document.createElement('h2')
  result.innerHTML = `${data.field} : ${persona[data.field]}`

  dataDiv.appendChild(result)
})





