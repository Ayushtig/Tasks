const displayTime = document.querySelector("#time");
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}
showTime();

var label1 = document.querySelector("#label1");
var label2 = document.querySelector("#label2");
var label3 = document.querySelector("#label3");
var label4 = document.querySelector("#label4");

var input = document
  .querySelector("input")
  .addEventListener("click", function () {
    label1.style.color = "white";
    label3.style.color = "white";
  });
var option = document
  .querySelector("#temptypes1")
  .addEventListener("click", function () {
    label2.style.color = "white";
  });
var option = document
  .querySelector("#temptypes2")
  .addEventListener("click", function () {
    label4.style.color = "white";
  });

function inputOption(e) {
  document.getElementById(temptypes1).value = e.target.value;
}
function outputOption(s) {
  document.getElementById(temptypes2).value = s.target.value;
}

var select1=document.getElementById(temptypes1).value;
var select2=document.getElementById(temptypes2).value;

function calculate(input1, input2) {
  if (select1 == "Celsius" && select2 == "Fahrenheit") {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value = (parseFloat(temp) * 9) / 5 + 32;
  } else if ((select1 = "Celsius" && select2 == "Kelvin")) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value = parseFloat(temp) + 273.15;
  } else if ((select1 = "Fahrenheit" && select2 == "Celsius")) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value = ((parseFloat(temp) - 32) * 5) / 9;
  } else if ((select1 = "Fahrenheit" && select2 == "Kelvin")) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value =
      ((parseFloat(temp) - 32) * 5) / 9 + 273.15;
  } else if ((select1 = "Kelvin" && select2 == "Celsius")) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value = parseFloat(temp) - 273.15;
  } else if ((select1 = "Kelvin" && select2 == "Fahrenheit")) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value =
      ((parseFloat(temp) - 273.15) * 9) / 5 + 32;
  } else if (select1 == select2) {
    var temp = document.getElementById(input1).value;
    document.getElementById(input2).value = parseFloat(temp);
  }
}
