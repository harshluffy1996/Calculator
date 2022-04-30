function add() {
  //capturing the values entered by user
  var no1 = parseInt(document.getElementById("t1").value);
  var no2 = parseInt(document.getElementById("t2").value);
  //before performing addtion you have to convert input value to integer or float
  var sum = no1 + no2;
  document.getElementById("t3").innerHTML = sum;
}

function sub() {
  //capturing the values entered by user
  var no1 = parseInt(document.getElementById("t1").value);
  var no2 = parseInt(document.getElementById("t2").value);
  //before performing addtion you have to convert input value to integer or float
  var sum = no1 - no2;
  document.getElementById("t3").innerHTML = sum;
}

function divide() {
  //capturing the values entered by user
  var no1 = parseInt(document.getElementById("t1").value);
  var no2 = parseInt(document.getElementById("t2").value);
  //before performing addtion you have to convert input value to integer or float
  var sum = no1 / no2;
  document.getElementById("t3").innerHTML = sum;
}

function multiply() {
  //capturing the values entered by user
  var no1 = parseInt(document.getElementById("t1").value);
  var no2 = parseInt(document.getElementById("t2").value);
  //before performing addtion you have to convert input value to integer or float
  var sum = no1 * no2;
  document.getElementById("t3").innerHTML = sum;
}
