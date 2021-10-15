var count=0
let countEl = document.getElementById("num2")
function add(){
  var countE = document.getElementById("num1").value
  count+=parseInt(countE)
  countEl.textContent=count
}
