const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const minValue = 1;
const maxValue = 6;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
let randomNum5;

myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * maxValue) + minValue;
  randomNum2 = Math.floor(Math.random() * maxValue) + minValue;
  randomNum3 = Math.floor(Math.random() * maxValue) + minValue;
  randomNum4 = Math.floor(Math.random() * maxValue) + minValue;
  randomNum5 = Math.floor(Math.random() * maxValue) + minValue;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
  label4.textContent = randomNum4;
  label5.textContent = randomNum5;
}
