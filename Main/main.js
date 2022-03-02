'use strict';

var n = 123;
const bigInt = 1234567890123456789012345678901234567890n;
var str = "World";
var age = null;
let id = Symbol();
var user = { name: "Вася" };
function init() {
    alert(0) // "number"

    typeof 1n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol() // "symbol"

    typeof {} // "object"
}