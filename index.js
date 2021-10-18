let countResult=0;
function add(){
  let countInput = parseInt(document.getElementById("num1").value);
  if (document.getElementById("num1").value==''){
    window.alert("Please enter a number.");
  }
  else{
    countResult+=countInput;
    document.getElementById("num2").textContent = countResult;
  }
}