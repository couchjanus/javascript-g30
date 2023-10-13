'use strict';
// js script
// window.alert("hello from js file")

/**
 * documentations
 */

var res = 2 + 2; 
// alert(res);

let a = 55;
let b = 77;
const test234_test_test$ = 'hello'
let _test = ""
let $_test = ""
let A = 55;
// for = 77
const city = "Kyiv"
let RES = null;
console.log(typeof(RES));
console.log(typeof(res));
{
    let a = "hello"
    let b = "world"

    // alert (a + b);

    const city = "LA";

    // alert(res);
    res = "It's string";
    // alert(res);
}
// city = "LA";
// alert (a + b);

function add(x, y) {
    return x + y;
}

function hello() {
    console.log("Hello World");
}


hello();
console.log(add(4.8, 4.7));
console.log(Math.sin(4.8, 4.7));

console.log(typeof(res));

console.log(typeof(hello));

console.log(3 != 1);

let x, y, z, o;
x = 7;
y = 9;
o = '*';
if (o == '+') {
    z = x + y;
}
else if (o == '-') {
    z = x - y;
}
else if (o == '*') {
    z = x * y;
}
else {
    console.log("Unknow operation");
}

console.log("Result = ", z);


switch (prompt("Enter operator:")) {
    case "+":   alert("x + y ="+(x+y)); break;
    case "-":    alert("x - y ="+(x-y)); break;
    case "*":    alert("x * y ="+(x*y));
    case "/":    alert("x / y ="+(x/y)); break;
    default:     alert("Непевна операція!"); break;
 }
 
