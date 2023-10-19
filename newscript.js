
let input = localStorage.getItem('input')
function submituser() {
  input = document.getElementById("userinput").value
  localStorage.setItem('input', input)
}
console.log(input)