typeof function x() {}; // function
typeof null; // object
typeof NaN; // number
typeof {}; // object
typeof []; // object
var undeclaredVariable;
typeof undeclaredVariable; // undefined

var string = "123";
string[0] = "5";
console.log(string); // "123"

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

Promise.reject("a")
  .then(
    (p) => p + "1",
    (p) => p + "2"
  ) // a2
  .catch((p) => p + "b") //-
  .catch((p) => p + "с") //-
  .then((p) => p + "d1") // a2d1
  .then("d2") //-
  .then((p) => p + "d3") // a2d1d3
  .finally((p) => p + "e") //-
  .then((p) => console.log(p)); // a2d1d3

console.log("start");
async function foo() {
  console.log("1");
  await console.log("2"); //
  console.log("3");
}
foo();
console.log("end");

var x;
console.log(x); // undefined
var x = 1;
console.log(x); // 1
function car() {
  var x;
  if (false) {
    var x = 2;
  }
  console.log(x); // undefined
}
car();
console.log(x); // 1

let x = 1;
function func() {
  console.log(x); // error
  let x = 2;
}
func();

let q = f();
const b = 2;
function f() {
  console.log(b);
}
// reference error


function test() {
  bar();
  var foo;
  foo();
  var foo = function () {
    console.log("FOO");
  };
  function bar() {
    console.log("BAR");
  }
}
test();
// "BAR"
// error

console.log(null || 2 && 3 || 4); // 2 && 3 //    3
console.log("" || 4); //                          4


var string1 = String(123); //
var string2 = new String(123);// obj
console.log(typeof string1 === typeof string2); // 'string' === 'obj' => false
console.log(string1 === string2); // ' => false
console.log(string1 == 123); // '123' => 123 ==  123  => true



console.log(null == ""); // false
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false
console.log(id1 == id2); // false