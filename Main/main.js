'use strict';

var n = 123;
const bigInt = 1234567890123456789012345678901234567890n;
var str = "World";
var age = null;
let id = Symbol();
var user = { name: "Вася" };
function init() {
    alert(typeof 1n) // "bigint"
    alert(typeof true) // "boolean"
    alert(typeof "foo") // "string"
    alert(typeof Symbol()) // "symbol"
    alert(typeof {}) // "object"
}
function init2() {
    alert(0) // "number"
    alert(typeof n)
    alert(typeof bigInt)
    alert(typeof n)
    alert(typeof n)
}

var car = {
    "model": "Dodge",
    "year": 1967,
    "color": "red",
    "body": "Hard top"
}
for (let j in car) {
    const element = document.getElementById(j);
    if (element) {
      element.innerHTML = (car[j]);
    }
  };