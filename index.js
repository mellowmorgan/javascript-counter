let countResult=0;
function add(){
  let countInput = parseInt(document.getElementById("num1").value);
  countResult+=countInput;
  document.getElementById("num2").textContent = countResult;
}